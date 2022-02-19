import Head from 'next/head';
import Layout from '../components/Layout';

export default function Cart() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Shopping Cart</title>
          <meta name="description" content="this is my shopping cart" />{' '}
        </Head>

        <h1> Shopping Cart</h1>
      </Layout>
    </div>
  );
}
