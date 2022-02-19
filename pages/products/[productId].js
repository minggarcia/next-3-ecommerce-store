import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../../components/Layout';
import yarnsDatabase from '../util/database';

const productInfoStyle = css`
  padding-left: 180px;
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

const quantityStyle = css`
  border: solid 1px #3a4460;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  gap: 25px;
`;

const buttonStyle = css`
  background: white;
  color: black;
  border-radius: 2px;
  border: #3a4460;
  cursor: pointer;
`;
const yarnAddButtonStyle = css`
  display: block;
  flex-direction: column;
  background: #3a4460;
  color: white;

  height: 30px;
  justify-content: center;
  width: 210px;
  border: none;
  border-radius: 2px;
  align-items: center;
  padding: 10px;
  cursor: pointer;
`;

export default function SingleProduct(props) {
  const [isInCart, setIsInCart] = useState(props.addedYarn);
  const [quantity, setQuantity] = useState(0);
  // const [minQuantity, setMinQuantity] = useState(0);
  const [addedToCart, setAddedToCart] = useState('');

  function handleAddToCookie(id) {
    // 1. get the current cookie value
    const cookieValue = JSON.parse(Cookies.get('cart') || '[]');

    // 2. update the cookie
    const existIdOnArray = cookieValue.some((cookieObject) => {
      return cookieObject.id === id;
    });

    const yarnAddedToCart = cookieValue.find((cookieObject) => {
      return cookieObject.id === id;
    });

    let newCookie;

    if (existIdOnArray) {
      const newQuantity = quantity + yarnAddedToCart.quantity;

      newCookie = [
        ...cookieValue,
        {
          id: id,
          quantity: newQuantity,
          name: props.yarn.name,
        },
      ];

      // 3. update cookie
      const cookieUpdated = newCookie.filter(
        (cookieObject) =>
          cookieObject.id !== id ||
          (cookieObject.id === id) & (cookieObject.quantity === newQuantity),
      );

      setIsInCart(cookieUpdated);
      Cookies.set('cart', JSON.stringify(cookieUpdated));
    } else {
      newCookie = [
        ...cookieValue,
        {
          id: id,
          quantity: quantity,

          name: props.yarn.name,
        },
      ];
      // 4. set the new value of the cookie
      setIsInCart(newCookie);
      Cookies.set('cart', JSON.stringify(newCookie));
    }
  }

  const yarnIsAddedToCart = isInCart.some((likedObject) => {
    return likedObject.id === props.yarn.id;
  });

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
          height="300"
        />
        <span>
          <h1>{props.yarn.name}</h1>
          {addedToCart}
          <div>id: {props.yarn.id}</div>
          <div>name: {props.yarn.name}</div>
          <div>type: {props.yarn.type}</div>
          <div>color: {props.yarn.color}</div>
          <div data-test-id="product-price">price: {props.yarn.price} € </div>

          <div css={quantityStyle}>
            <input type="number" id="quantity" name="quantity" min="1" />
            <button
              min="1"
              css={buttonStyle}
              onClick={() => setQuantity(quantity - 1)}
            >
              {' '}
              -{' '}
            </button>
            <p>{quantity}</p>
            <button css={buttonStyle} onClick={() => setQuantity(quantity + 1)}>
              {' '}
              +{' '}
            </button>
          </div>
          <button
            css={yarnAddButtonStyle}
            data-test-id="product-add-to-cart"
            onClick={() => handleAddToCookie(props.yarn.id)}
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
