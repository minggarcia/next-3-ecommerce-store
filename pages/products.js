import { css } from '@emotion/react';
import { readFileSync } from 'fs';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import yarnsDatabase from './util/database';

// const yarns = [
//   { id: 1, type: 'Merino', color: 'Ecru' },
//   { id: 2, type: 'Alpaca', color: 'Lightgrey' },
//   { id: 3, type: 'Cotton', color: 'Beige' },
//   { id: 4, type: 'Mohair', color: 'Skyblue' },
//   { id: 5, type: 'Silk', color: 'Pastelgreen' },
//   { id: 6, type: 'Cashmere', color: 'Lilac' },
// ];

const yarnStyles = css`
  border-radius: 5px;
  border: 2px solid #f9f1cc;
  padding: 15px;
  margin-bottom: 30px;
`;

export default function Products(props) {
  console.log('props', JSON.stringify(props, null, 2));
  return (
    <div>
      <Layout>
        <Head>
          <title>Products</title>
          <meta name="description" content="all the products" />
        </Head>

        <h1>Products</h1>
        {props.yarns.map((yarn) => {
          return (
            <div key={`yarn-${yarn.id}`} css={yarnStyles}>
              <Link href={`/products/${yarn.id}`}>
                <a>
                  {yarn.type} in {yarn.color}
                </a>
              </Link>
            </div>
          );
        })}
      </Layout>
    </div>
  );
}

// getServerSideProps --> runs only in node.js
export function getServerSideProps() {
  readFileSync('./README.md');
  return {
    props: { yarns: yarnsDatabase },
  };
}
