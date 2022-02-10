import { css } from '@emotion/react';
import { readFileSync } from 'fs';
import Head from 'next/head';
import Image from 'next/image';
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
  border: 2px solid #a8a7bb;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const h1Style = css`
  text-align: center;
  margin-top: 100px;
  margin-bottom: 80px;
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

        <h1 css={h1Style}>Products</h1>

        {props.yarns.map((yarn) => {
          return (
            <div key={`yarn-${yarn.id}`} css={yarnStyles}>
              <Link href={`/products/${yarn.id}`}>
                <a data-test-id={`yarn-${yarn.id}`}>
                  {/* {yarn.type} in {yarn.color} */}
                  <Image
                    data-test-id="product-image"
                    alt="yarn image"
                    src={`/allyarns/${yarn.id}.jpeg`}
                    width="300"
                    height="300"
                  />
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
