import { ThemeProvider } from '@material-ui/core/styles'
import '@/styles/globals.css'
import AppHead from '@/components/app-head'
import customTheme from '@/styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AppHead />
      <ThemeProvider theme={customTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

export default MyApp
