import Image from 'next/image'
import Link from 'next/link'
import { Button, Typography } from '@material-ui/core'

export default function AppNav(props) {
    const buttonName = props.buttonName
    const buttonHref = props.buttonHref

    return (
        <div className="flex flex-row nav-div">
            <div className="flex flex-row icon-div">
                <Link href="/">
                    <a><Image src="/appicon.svg" height="40" width="40" className="logo" priority /></a>
                </Link>
                <Typography variant="h5" className="app-name" style={{ fontFamily: 'Courier' }}>Logzly</Typography>
            </div>
            <Link href={buttonHref}>
                <Button variant="contained" color="primary" className="login-home-button">{buttonName}</Button>
            </Link>
        </div>
    )
}