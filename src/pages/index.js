import { AppBar, Button, Typography } from '@material-ui/core'
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

      <Image src="/home.svg" layout="fill"></Image>

      <ThemeProvider theme={theme}>
        <div className="flex flex-row nav-div">
          <div className="flex flex-row icon-div">
            <Image src="/favicon.ico" height="40" width="40" className="logo"></Image>
            <Typography variant="h6" className="app-name">Logzly</Typography>
          </div>
          <Button variant="contained" color="primary" className="home-login-button">Login</Button>
        </div>
      </ThemeProvider>
    </div>
  )
}
