import React, { ReactNode } from 'react';import Head from 'next/head';
import Header from './Header';
import styles from './styles.module.css';
import Footer from './Footer';

type Props = {
  children?: ReactNode
  title?: string
  fullPage?: boolean;
  isOnline?: boolean;
};

const Layout = ({ children, title = 'The Wedding of Andrew & Agnes', fullPage = false, isOnline = false }: Props) => (
  <div className={styles.bgLayout}>
    <Head>
        <link href="http://fonts.cdnfonts.com/css/abhaya-libre-2" rel="stylesheet" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="font-abhaya-libre">
        {
            !fullPage && <Header isOnline={isOnline} /> 
        }
        <div>
            {children}
        </div>
        {
            !fullPage && <Footer />
        }
    </div>
  </div>
);

export default Layout;
