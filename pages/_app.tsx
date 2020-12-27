import { AppProps } from 'next/app'
import 'semantic-ui-css/semantic.min.css'
import '../global.css'

import CartProvider from '@store/Cart'

export const reportWebVitals = (metric) => {
  console.log(metric)
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
