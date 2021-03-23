import { Button, Typography } from '@material-ui/core'
import AppNav from '../components/app-nav'
import AppBackground from '../components/app-background'

export default function Home() {
  return (
    <div>
      <AppBackground />
      <AppNav displayLoginButton={true} />

      <div className="center-content">
        <Typography variant="h2" style={{ fontSize: '7vh', fontFamily: 'Courier', padding: '2vh 2vh' }}>A journaling app for developers.</Typography>
        <Button variant="contained" color="secondary" href="login">Get Started</Button>
      </div>
    </div>
  )
}
