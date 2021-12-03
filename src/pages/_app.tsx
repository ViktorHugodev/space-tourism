import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { SidebarProvider } from '../contexts/SideBarContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider>
      <Component {...pageProps} />

    </SidebarProvider>
  )
}

export default MyApp
