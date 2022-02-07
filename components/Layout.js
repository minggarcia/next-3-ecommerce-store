import Head from 'next/head';
import Header from './Header';

export default function Layout(props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/yarn-icon-20.png" />
      </Head>
      <Header />
      <main>{props.children}</main>
      <footer />
    </>
  );
}
