import React from "react";
import "../styles.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";  

export default class LogPage extends React.Component {
    render() {
        return (
        <div>
            <nav>
                <button>
                    <Link to="/">Logout</Link>
                </button>
                <button>
                    <Link to="/groups">Groups</Link>
                </button>
            </nav>
        </div>
    );
    }
}