import React from "react";
import { Redirect } from "react-router";
import { Button, Typography } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import { useAuth } from "../lib/auth";
import AppBackground from "./AppBackground";
import AppNav from "./AppNav";
import AppFooter from "./AppFooter";


function LoginPage() {
    const auth = useAuth();
    return auth.user ? (
        <Redirect to="/groups" />
    ) : (
        <div>
            <AppBackground />
            <AppNav buttonName="Home" buttonHref="/" />
            <div className="center-content">
                <Typography variant="h2" style={{ fontSize: '7vh', fontFamily: 'Courier', padding: '2vh 2vh' }}>Log in to Logzly</Typography>
                <Button variant="contained" style={{ background: '#24292e', color: 'white' }} startIcon={<GitHubIcon />} onClick={() => auth.signinWithGitHub()} >Login With GitHub</Button>
            </div>
            <AppFooter />
        </div>
    );
}

export default LoginPage;