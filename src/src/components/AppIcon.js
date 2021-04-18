import { Link } from "react-router-dom";
import icon from "../static/app.svg";

function AppIcon() {
    return (
        <Link to="/">
            <img src={icon} height="40" width="40" />
        </Link>
    );
}

export default AppIcon;