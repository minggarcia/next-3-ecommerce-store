import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

const h1Style = css`
  text-align: center;
  margin-top: 100px;
  margin-bottom: 80px;
`;

export default function Home() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Home</title>
          <meta name="description" content="Homepage" />
        </Head>
        <h1 css={h1Style}>Welcome to yarn start!</h1>
        <Image
          alt="yarn and equipment"
          src="/allyarns/yarn.jpeg"
          width="1600"
          height="500"
        />
      </Layout>
    </div>
  );
}
