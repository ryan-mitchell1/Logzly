import React from "react";
import "../styles.css";
import Navbar from './Navbar';

export default class GroupPage extends React.Component {
    render() {
        return (
        // <div>
        //     <nav>
        //         <button>
        //             <Link to="/">Logout</Link>
        //         </button>
        //         <button>
        //             <Link to="/logs">Logs</Link>
        //         </button>
        //     </nav>
        // </div>
        <Navbar />
    );
    }
}