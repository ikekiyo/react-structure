import '../styles/globals.css'
import type { AppProps } from 'next/app'

import AppMainLayout from '~/layouts/AppMainLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppMainLayout>
      <Component {...pageProps} />
    </AppMainLayout>
  )
}

export default MyApp
