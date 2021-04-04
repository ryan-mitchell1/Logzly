import { Button, Typography } from "@material-ui/core"
import GitHubIcon from '@material-ui/icons/GitHub'
import AppBackground from "@/components/app-background"
import AppFooter from "@/components/app-footer"
import AppNav from "@/components/app-nav"

export default function Login() {
    return (
        <div>
            <AppBackground />
            <AppNav buttonName="Home" buttonHref="/" />
            <div className="center-content">
                <Typography variant="h2" style={{ fontSize: '7vh', fontFamily: 'Courier', padding: '2vh 2vh' }}>Log in to Logzly</Typography>
                <Button variant="contained" style={{ background: '#24292e', color: 'white' }} startIcon={<GitHubIcon />}>Login With GitHub</Button>
            </div>
            <AppFooter />
        </div>
    )
}
