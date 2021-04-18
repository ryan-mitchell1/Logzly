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

const test_username = "mem3";

function OptionButton(props) {
    const isAdmin = props.admin == test_username;
    const groupId = props.groupId;
    if (isAdmin) {
        return <Button variant="contained" color="secondary" size="small">Delete</Button>;
    }
    return <Button variant="contained" color="secondary" size="small">Leave</Button>;
};

const useStyles = makeStyles({
    table: {
        width: '75%',
        marginLeft: '12.5%',
    },
    buttonStyle: {
        background: '#70B657'
    },
});
export default function GroupPage() {
    const auth = useAuth();
    const classes = useStyles();

    const [groupData, setGroupData] = useState([]);

    useEffect(() => {
        var group_data = [
            {
                "groupId": 1,
                "groupName": "group1",
                "groupTitle": "Group 1 Title",
                "groupMembers": [
                    "mem1",
                    "mem2",
                    "mem3"
                ],
                "admin": "mem1",
                "lastUpdated": "03-30-2020 12:22:45"
            },
            {
                "groupId": 2,
                "groupName": "group2",
                "groupTitle": "Group 2 Title",
                "groupMembers": [
                    "mem1",
                    "mem2",
                    "mem3"
                ],
                "admin": "mem3",
                "lastUpdated": "03-31-2020 14:26:45"
            }
        ];
        setGroupData(group_data);
    }, [])

    return auth.user ? (
        <div>
            <Navbar />
            <TableContainer component={Paper} className={classes.table}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Group Name</TableCell>
                            <TableCell align="right">Group Title</TableCell>
                            <TableCell align="center">Last Updated</TableCell>
                            <TableCell align="center">Leave/Delete</TableCell>
                            <TableCell align="center">Logs</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {groupData.map((row) => (
                            <TableRow key={row.groupId}>
                                <TableCell component="th" scope="row">
                                    {row.groupName}
                                </TableCell>
                                <TableCell align="right">{row.groupTitle}</TableCell>
                                <TableCell align="center">{row.lastUpdated}</TableCell>
                                <TableCell align="center"><OptionButton admin={row.admin} groupId={row.groupId} /></TableCell>
                                <TableCell align="center">
                                    <Link to={"/logs/" + row.groupId} style={{ textDecoration: 'none' }}>
                                        <Button variant="contained" color="primary" size="small">Go</Button>
                                    </Link>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    ) : (
        <Redirect to="/login" />
    );
}