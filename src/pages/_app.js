import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import '../styles/globals.css'
import AppHead from '../components/app-head'

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

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AppHead />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

export default MyApp
