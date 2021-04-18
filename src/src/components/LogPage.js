import React from "react";
import "../styles.css";
import LogNavbar from './LogNavbar';
import { Remarkable } from 'remarkable';
import createReactClass from 'create-react-class';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";  
import { Container } from "@material-ui/core";

const headerComment = {fontSize:"20px", fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif"};
const headerDate = {fontSize:"16px", fontWeight: 'normal', float:'right'};
const commentStyle = { fontSize:"14px", fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif"};
const containerStyle = {  margin: 'auto', width: '75%'};
var Comment = createReactClass({
    rawMarkup: function() {
        var md = new Remarkable();
        var rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup };
    },

    render: function() {
        return (
        <div className="comment">
            <h5 style={headerComment} className="commentAuthor">
                {this.props.author} <span style={headerDate}> {this.props.created}</span>
            </h5>
            <span style={commentStyle} dangerouslySetInnerHTML={this.rawMarkup()} />
        </div>
        );
    }
});

var CommentList = createReactClass({
    render: function() {
        var commentNodes = this.props.data.map(function(comment) {
            return (
                <div key={comment.logId}>
                    <Comment author={comment.author} created={comment.created}>
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

let search = window.location.search;
let params = new URLSearchParams(search);
let groupName = params.get('group-id');

var log_data = [
    {
        "logId":1,
        "groupId":1,
        "created":"03-31-2020 14:26:45",
        "author":"Ryan Mitchell",
        "uid":"jFxgv779ZQd0b3lPf08jqm8WKzH3",
        "text":"Wow great app!"
    },
    {
        "logId":2,
        "groupId":1,
        "created":"04-02-2020 15:31:45",
        "author":"Nikesh Parajuli",
        "uid":"jFxgv779ZQd0b3lPf08jqm8WKzH3",
        "text":"Awesome app!"
    }
];

export default function LogPage() {
return (
    <div>
        <LogNavbar />
        &nbsp;
        <div style={containerStyle}>
            <h3 style={{fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif"}}>Comments:</h3>
            <CommentList data={log_data} />
        </div>
    </div>
    );
}
