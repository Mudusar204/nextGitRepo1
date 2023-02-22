import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import store from '../store/store'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
function MyApp({ Component, pageProps }: AppProps) {
  return (
<Provider store={store}>
<ToastContainer/>
    <ChakraProvider>
      <Component {
        
        ...pageProps} />
     </ChakraProvider>
        </Provider>
     )
}
export default MyApp
