import React, { useState, useEffect } from "react";
import LogNavbar from './LogNavbar';
import { Remarkable } from 'remarkable';
import createReactClass from 'create-react-class';
import { getLogs } from '../lib/db'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Container } from "@material-ui/core";
import { useAuth } from "../lib/auth";
import { Redirect, useParams } from "react-router";

const headerComment = { fontSize: "20px", fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif", display:'flex', alignItems:'center' };
const headerDate = { fontSize: "16px", fontWeight: 'normal', marginLeft:'auto' };
const commentStyle = { fontSize: "16px", fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif" };
const containerStyle = { margin: 'auto', width: '75%' };
const imgStyle = {height: '30px', borderRadius: '100px', marginRight: '2%'}

function convertToDateTime(miliSeconds) {
    var today = new Date(miliSeconds);
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    var dateTime = date + " " + time;

    return dateTime;
}

var Comment = createReactClass({
    rawMarkup: function () {
        var md = new Remarkable();
        var rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup };
    },

    render: function () {
        return (
            <div className="comment">      
                <h5 style={headerComment} className="commentAuthor">
                    <img style={imgStyle} src={this.props.picture}></img> {this.props.author} <span style={headerDate}> {convertToDateTime(this.props.created)}</span>
                </h5>
                <span style={commentStyle} dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
});

var CommentList = createReactClass({
    render: function () {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                <div key={comment.id}>
                    <Comment author={comment.author} created={comment.created} picture={comment.picture}>
                        {comment.text}
                    </Comment>
                    <hr />
                </div>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

export default function LogPage() {
    const auth = useAuth();
    const [logData, setLogData] = useState([]);

    let { groupId } = useParams();

    useEffect(() => {
        if (groupId) {
            var results = getLogs(groupId, auth.user.uid);
            results.then(data => {
                if(data == "not available"){
                    window.location.href = "/not-found";
                } else {
                    var sortedData = data.sort(function (a, b) { return b.created - a.created });
                    setLogData(sortedData);
                }
            })
        }
    }, [])

    function LogTable() {
        if (logData.length == 0) {
            return <h2 style={{ textAlign: "center", fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif" }}>This group has no logs. Create a log to get started!</h2>
        } else {
            return (
                <div style={containerStyle}>
                    <CommentList data={logData} />
                </div>
            )
        }
    }

    return auth.user ? (
        <div>
            <LogNavbar />
        &nbsp;
            <LogTable />
        </div>
    ) : (
        <Redirect to="/login" />
    );
}
