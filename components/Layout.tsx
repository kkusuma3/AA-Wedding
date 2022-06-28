import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from './Header';
import styles from './styles.module.css';

type Props = {
  children?: ReactNode
  title?: string
};

const Layout = ({ children, title = 'The Wedding of Andrew & Agnes' }: Props) => (
  <div className={styles.bgLayout}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <div className="mx-auto w-10/12">
        {children}
    </div>
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;