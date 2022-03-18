import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '../components/header/header'

function MyApp({ Component, pageProps }: AppProps): JSX.Element | null {
  return (
    <>
    <Header />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp