import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
    const notFoundStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '30%' };
    const homeButtonDiv = {display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop:"2%"};
    return (
        <div>
            <div style={notFoundStyle}>
                Whoops! Looks like the page you are looking for does not exist.
        </div>
        <div style={homeButtonDiv}>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary" className="login-home-button">Home</Button>
            </Link>
        </div>
        </div>
    );
}
