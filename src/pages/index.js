import { AppBar, Box, Button, Typography } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head'
import Image from 'next/image'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#115293',
    },
    secondary: {
      main: '#801313',
    },
  },
})

export default function Home() {
  return (
    <div>
      <Head>
        <title>Logzly</title>
        <link rel="favicon" href="favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

      <Image src="/home.svg" layout="fill" className="app-background" />

      <ThemeProvider theme={theme}>
        <div className="flex flex-row nav-div">
          <div className="flex flex-row icon-div">
            <Image src="/appicon.svg" height="40" width="40" className="logo" />
            <Typography variant="h5" className="app-name" style={{ fontFamily: 'Courier' }}>Logzly</Typography>
          </div>
          <Button variant="contained" color="primary" className="home-login-button">Login</Button>
        </div>

        <div className="app-about">
          <Typography variant="h2" style={{ fontSize: '7vh', fontFamily: 'Courier', padding: '2vh 2vh' }}>A journaling app for developers.</Typography>
          <Button variant="contained" color="secondary">Get Started</Button>
        </div>


      </ThemeProvider>
    </div>
  )
}
