import FooterNav from '@/components/Footer'
import Navigation from '@/components/Navigation'
import Head from 'next/head'
import React, { PropsWithChildren } from 'react'

const Layout = ({children}:PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>Zhai Help African International | Chinese NGO for African Relief</title>
        <meta name="description" content="Zhai Help African International is a Chinese-founded NGO dedicated to providing humanitarian aid and relief efforts across Africa. Learn more about our mission and impact." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Zhai Help, African International, Chinese NGO, African relief, humanitarian aid, NGO Africa, Chinese aid Africa, Africa charity, Zhai Foundation" />
        <meta property="og:title" content="Zhai Help African International | Chinese NGO for African Relief" />
        <meta property="og:description" content="Zhai Help African International, founded by the Chinese, is committed to delivering aid and relief across Africa. Discover our projects and how you can contribute." />
        <meta property="og:image" content="/images/favicon.webp" />
        <meta property="og:url" content="https://zhelpafricainternational.org/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zhai Help African International | Chinese NGO for African Relief" />
        <meta name="twitter:description" content="Zhai Help African International, founded by the Chinese, is committed to delivering aid and relief across Africa. Discover our projects and how you can contribute." />
        <meta name="twitter:image" content="/images/zhai-foundation-twitter-image.webp" />
        <link rel="icon" href="/images/favicon.webp" />
        <meta name="google-site-verification" content="3ettNYtEeWYm9xZTgfl3OlkPDP9_dhNhgaWjNK0nfWQ" />
        <link rel="canonical" href="https://zhelpafricainternational.org/" />
      </Head>
      <main>
        <Navigation />
        <div style={{ marginTop: "5vh", paddingTop: '5vh' }}>
          {children}
          <FooterNav />
        </div>
      </main>
    </>
  )
}

export default Layout
