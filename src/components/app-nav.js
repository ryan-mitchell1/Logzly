import Image from 'next/image'
import Link from 'next/link'
import { Button, Typography } from '@material-ui/core'

export default function AppNav(props) {
    const displayLoginButton = props.displayLoginButton

    return (
        <div className="flex flex-row nav-div">
            <div className="flex flex-row icon-div">
                <Link href="/">
                    <a><Image src="/appicon.svg" height="40" width="40" className="logo" /></a>
                </Link>
                <Typography variant="h5" className="app-name" style={{ fontFamily: 'Courier' }}>Logzly</Typography>
            </div>
            {displayLoginButton && <Button variant="contained" color="primary" className="home-login-button" href="login">Login</Button>}
        </div>
    )
}