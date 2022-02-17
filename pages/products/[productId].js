import { css } from '@emotion/react';
import { prototype } from 'events';
import Cookies from 'js-cookie';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../../components/Layout';
import { setParsedCookie } from '../util/cookies';
import yarnsDatabase from '../util/database';

const h1Style = css`
  text-align: center;

  margin-bottom: 80px;
`;

const productInfoStyle = css`
  padding-left: 60px;
  border: solid 2px #a8a7bb;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  gap: 180px;

  margin-top: 100px;
  span {
    margin-top: 100px;
    margin-bottom: 100px;
    padding-right: 180px;
    padding-left: 50px;
    padding-bottom: 20px;
    line-height: 40px;
    background: #a8a7bb;
    border-radius: 5px;
  }
`;

export default function SingleProduct(props) {
  const [isInCart, setIsInCart] = useState(props.addedYarn);

  const currentCartObject = isInCart.find(
    (cookieObject) => cookieObject.id === props.yarn.id,
  );
  function addToCartButton() {
    // 1. get the current cookie value
    const cookieValue = JSON.parse(Cookies.get('cart') || '[]');
    // 2. update the cart count to +1
    const newCookie = cookieValue.map((cookieObject) => {
      if (cookieObject.id === props.yarn.id) {
        return { ...cookieObject, quantity: cookieObject.quantity + 1 };
      } else {
        return cookieObject;
      }
    });
    // 3. update cookie and state
    setIsInCart(newCookie);

    setParsedCookie('cart', newCookie);
  }
  return (
    <Layout>
      <Head>
        <title>{props.yarn.type}</title>
        <meta description="all yarns" />
      </Head>

      <div css={productInfoStyle}>
        <Image
          data-test-id="product-image"
          alt="yarn image"
          src={`/allyarns/${props.yarn.id}.jpeg`}
          width="500"
          height="500"
        />
        <span>
          <h1>{props.yarn.name}</h1>
          {/* <Image
            src="/allyarns/yarn-icon-20.png"
            width="40px"
            height="40px"
            alt="yarn logo"
          /> */}
          <div>id: {props.yarn.id}</div>
          <div>name: {props.yarn.name}</div>
          <div>type: {props.yarn.type}</div>
          <div>color: {props.yarn.color}</div>
          <div data-test-id="product-price">price: {props.yarn.price}</div>
          quantity:
          <input type="number" id="quantity" name="quantity" min="1" />
          <button
            data-test-id="product-add-to-cart"
            onClick={() => addToCartButton()}
          >
            yarn add
          </button>
        </span>
      </div>
    </Layout>
  );
}

export function getServerSideProps(context) {
  const addedYarnFromCookies = context.req.cookies.addedYarn || '[]';
  const addedYarn = JSON.parse(addedYarnFromCookies);

  const productId = context.query.productId;
  console.log('db', yarnsDatabase);
  const matchingYarn = yarnsDatabase.find((yarn) => {
    // eslint-disable-next-line sonarjs/prefer-single-boolean-return
    if (yarn.id === productId) {
      return true;
    } else {
      return false;
    }
  });

  return {
    props: {
      yarn: matchingYarn,
      addedYarn: addedYarn,
      // productId: productId,
    },
  };
}
