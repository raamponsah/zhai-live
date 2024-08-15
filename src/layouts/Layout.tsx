import FooterNav from '@/components/Footer'
import Navigation from '@/components/Navigation'
import Head from 'next/head'
import React, { PropsWithChildren } from 'react'

const Layout = ({children}:PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>Zhai Foundation</title>
        <meta name="description" content="Zhai Foundation for Africa!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />


        <meta name="google-site-verification" content="3ettNYtEeWYm9xZTgfl3OlkPDP9_dhNhgaWjNK0nfWQ" />
      </Head>
      <main>
        <Navigation></Navigation>

        <div style={{ marginTop: "5vh", paddingTop:'5vh'}}>
    {children}
    


    <FooterNav/>
    </div>
    </main>

  </>
  )
}

export default Layout