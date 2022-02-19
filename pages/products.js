import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '../components/Layout';
import { getParsedCookie, setParsedCookie } from './util/cookies';
import yarnsDatabase, { readProducts } from './util/database';

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
  // const [isInCart, setIsInCart] = useState(props.addedYarn);
  // console.log('props', JSON.stringify(props, null, 2));

  // function yarnAdd(id) {
  // 1. get the value of the cookie
  // const cookieValue = getParsedCookie('cart') || '[]';

  // console.log('current cookie value', cookieValue);

  // 2. update the cookie
  //   const existIdOnArray = cookieValue.some((cookieObject) => {
  //     return cookieObject.id === id;
  //   });
  //   let newCookie;
  //   if (existIdOnArray) {
  //     // cookieValue [{id: 3}, {id: 5}]
  //     newCookie = cookieValue.filter((cookieObject) => {
  //       return cookieObject.id !== id;
  //     });
  //   } else {
  //     newCookie = [...cookieValue, { id: id }];
  //   }

  //   // 3. set the new value of the cookie
  //   setIsInCart(newCookie);
  //   setParsedCookie('cart', newCookie);
  // }

  return (
    <div>
      <Layout>
        <Head>
          <title>Products</title>
          <meta name="description" content="all the products" />
        </Head>

        <h1 css={h1Style}>Products</h1>

        {props.yarns.map((yarn) => {
          // const yarnIsAddedToCart = isInCart.some((addedObject) => {
          //   return addedObject.id === yarn.id;
          // });
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
export function getServerSideProps(context) {
  // const addedYarn = JSON.parse(addedYarnOnCookies);
  // IMPORTANT:
  // - Always return an object from getServerSideProps
  // - Always return a key in that object that is called props

  // 1. get the cookies from the browser
  // 2. pass the cookie to the frontend
  const addedYarnFromCookies = context.req.cookies.addedYarn || '[]';

  // if there is no added yarn cookie on the browser we store to an [] otherwise we get the cookie value and parse it
  const addedYarn = JSON.parse(addedYarnFromCookies);

  // IMPORTANT:
  // - ALWAYS RETURN AN OBJECT FROM getServerSideProps
  // - ALWAYS RETURN A KEY IN THAT OBJECT THAT IS CALLES PROPS

  // const products = await readProducts();

  return {
    // in the props object, you can pass back whatever information you want
    props: {
      addedYarn: addedYarn,
      yarns: yarnsDatabase,
      // addedYarn: addedYarn,
    },
  };
}
