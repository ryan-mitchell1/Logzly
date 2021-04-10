import React from "react";
import "../styles.css";
import Navbar from './Navbar';
import Container from '@material-ui/core/Container';

const test_username = "mem3";

function OptionButton(props) {
    const isAdmin = props.admin == test_username;
    if (isAdmin) {
      return <td>Delete Group</td>;
    }
    return <td>Leave Group</td>;
  };


export default class GroupPage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          group_data: []
        };
    }

    componentWillMount() {
        var group_test_data = [
            {
                "groupName":"group1",
                "groupTitle":"Group 1 Title",
                "groupMembers":[
                    "mem1",
                    "mem2",
                    "mem3"
                ],
                "admin":"mem1",
                "lastUpdated":"03-30-2020 12:22:45"
            },
            {
                "groupName":"group2",
                "groupTitle":"Group 2 Title",
                "groupMembers":[
                    "mem1",
                    "mem2",
                    "mem3"
                ],
                "admin":"mem3",
                "lastUpdated":"03-31-2020 14:26:45"
            }
        ];
    
        this.setState({ group_data: group_test_data });
    }
    
    render() {
        const {
            group_data
         } = this.state;
        return (
        <div>
            <Navbar />
            <Container maxWidth="md">
                <h3 style={{fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif"}}>Your Groups:</h3>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Title</td>
                            <td>Last Updated</td>
                            <td>Options</td>
                            <td>Logs</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(group_data).map(function (element) {
                                return (
                                <tr key={element}>
                                    <td>{group_data[element].groupName}</td>
                                    <td>{group_data[element].groupTitle}</td>
                                    <td>{group_data[element].lastUpdated}</td>
                                    <OptionButton admin={group_data[element].admin} />
                                    <td><button><i class="arrow right"></i></button></td>
                                </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </Container>
        </div>
    );
    }
}