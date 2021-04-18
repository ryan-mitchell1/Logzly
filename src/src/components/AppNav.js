import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import AppIcon from "./AppIcon";

function AppNav({ buttonName, buttonHref }) {
    return (
        <div className="flex flex-row nav-div">
            <div className="flex flex-row icon-div">
                <AppIcon />
                <Typography variant="h5" className="app-name" style={{ fontFamily: 'Courier' }}>Logzly</Typography>
            </div>
            <Link to={buttonHref} style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary" className="login-home-button">{buttonName}</Button>
            </Link>
        </div>
    );
}

export default AppNav;