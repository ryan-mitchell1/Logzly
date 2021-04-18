import React from "react";
import { Redirect } from "react-router";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useAuth } from "../lib/auth";
import AppBackground from "./AppBackground";
import AppNav from "./AppNav";
import AppFooter from "./AppFooter";

function HomePage() {
    const auth = useAuth();

    return auth.user ? (
        <Redirect to="/groups" />
    ) : (
        <div>
            <AppBackground />
            <AppNav buttonName="Login" buttonHref="/login" />
            <div className="center-content">
                <Typography variant="h2" style={{ fontSize: '7vh', fontFamily: 'Courier', padding: '2vh 2vh' }}>A journaling app for developers.</Typography>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="secondary">Get Started</Button>
                </Link>
            </div>
            <AppFooter />
        </div>
    )
}

export default HomePage;