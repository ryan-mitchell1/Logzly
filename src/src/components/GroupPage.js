import React, { useState, useEffect } from "react";
import Navbar from './Navbar';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useAuth } from "../lib/auth";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import { getGroups } from '../lib/db'

const useStyles = makeStyles((theme) => ({
    table: {
        width: '75%',
        marginLeft: '12.5%',
        marginTop: '3%',
    },
    buttonStyle: {
        background: '#70B657'
    },
    modal: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
      },
}));

export default function GroupPage() {
    const auth = useAuth();
    const classes = useStyles();

    const [groupData, setGroupData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [id, setId] = useState();
    const [type, setType] = useState();

    function body() {
        return (
        <div className={classes.modal}>
          <h2 id="simple-modal-title" style={{ textAlign: "center", fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif" }}>Are you sure you want to {type} this group?</h2>
            <div style={{textAlign:'center'}}>
            <Button
              style={{marginRight: '10%'}}
              variant="contained"
              color="primary"
              onClick={() => leaveDelete(id, type)}
            >
              {type}
                </Button>
            <Button
            variant="contained"
            color="secondary"
            onClick={() => leaveDelete(id, type)}
        >
            Cancel
            </Button>
            </div>
        </div>
        )
    };

    useEffect(() => {
        if(auth.user){
            var results = getGroups(auth.user.uid);
            results.then( data => {
                var sortedData = data.sort(function(a, b) {return b.lastUpdated - a.lastUpdated});
                setGroupData(sortedData);
            })
        }
    }, [])
    
    const handleCloseCreate = () => {
        setShowModal(false);
    };

    const confirm = (type, id) => {
        setShowModal(true);
        setType(type);
        setId(id);
    };

    function leaveDelete(id, type) {
        if(type == 'delete'){

        } else if(type == 'leave'){

        }
        setShowModal(false);
    }

    function convertToDateTime(miliSeconds) {
        var today = new Date(miliSeconds);
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        var dateTime = date + " " + time;
    
        return dateTime;
    }

    function OptionButton(props) {
        var isAdmin = false;
        if(auth.user){
            isAdmin = props.admin == auth.user.uid;
        } 
        const id = props.id;
        if (isAdmin) {
            return <Button variant="contained" color="secondary" size="small" onClick={() => confirm('delete', id)}>Delete</Button>;
        }
        return <Button variant="contained" color="secondary" size="small" onClick={() => confirm('leave', id)}>Leave</Button>;
    };

    function GroupTable() {
        if(groupData.length == 0){
            return <h2 style={{ textAlign: "center", fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif" }}>You currently have no groups.</h2>
        } else{
            return (
                <TableContainer component={Paper} className={classes.table}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Group Name</TableCell>
                            <TableCell align="center">Group Title</TableCell>
                            <TableCell align="center">Last Updated</TableCell>
                            <TableCell align="center">Leave/Delete</TableCell>
                            <TableCell align="center">Logs</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {groupData.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.groupName}
                                </TableCell>
                                <TableCell align="center">{row.groupTitle}</TableCell>
                                <TableCell align="center">{convertToDateTime(row.lastUpdated)}</TableCell>
                                <TableCell align="center"><OptionButton admin={row.admin} id={row.id} /></TableCell>
                                <TableCell align="center">
                                    <Link to={"/logs/" + row.id} style={{ textDecoration: 'none' }}>
                                        <Button variant="contained" color="primary" size="small">Go</Button>
                                    </Link>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            )
        }
    }

    return auth.user ? (
        <div>
            <Navbar />
            <GroupTable />
            <Modal
                open={showModal}
                onClose={handleCloseCreate}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
            {body()}
            </Modal>
        </div>
    ) : (
        <Redirect to="/login" />
    );
}
