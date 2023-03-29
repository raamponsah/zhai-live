import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import {Josefin_Sans} from '@next/font/google'

const font = Josefin_Sans({
  subsets:['latin'],
  weight:['100','200','300','400','500','600','700'],
})
export default function App({ Component, pageProps }: AppProps) {
  return (<main className={font.className}>
    <Component {...pageProps} />
    </main>)
}
