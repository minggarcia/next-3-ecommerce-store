import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Home</title>
          <meta name="description" content="Homepage" />
        </Head>
        <h1>Home</h1>
        <p>Content</p>
      </Layout>
    </div>
  );
}
