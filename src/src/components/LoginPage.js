import React from "react";
import "../styles.css";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";  

export default class LoginPage extends React.Component {
    render() {
        return (
        <div>
            <nav>
                <button>
                    <Link to="/groups">Groups</Link>
                </button>
            </nav>
        </div>
    );
    }
}