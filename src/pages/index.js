import { Button, Typography } from '@material-ui/core'
import AppNav from '@/components/app-nav'
import AppBackground from '@/components/app-background'
import AppFooter from '@/components/app-footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <AppBackground />
      <AppNav buttonName="Login" buttonHref="login" />
      <div className="center-content">
        <Typography variant="h2" style={{ fontSize: '7vh', fontFamily: 'Courier', padding: '2vh 2vh' }}>A journaling app for developers.</Typography>
        <Link href="login">
          <Button variant="contained" color="secondary">Get Started</Button>
        </Link>
      </div>
      <AppFooter />
    </div>
  )
}
