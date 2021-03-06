import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../../components/Layout';
import { getParsedCookie } from '../util/cookies';
import { getProduct } from '../util/database';

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

function cookieHandler(id) {
  // 1. get the value of the cookie

  const cookieValue = getParsedCookie('cart' || '[]');
}

export default function SingleProduct(props) {
  console.log(props);
  const [quantity, setQuantity] = useState(0);

  return (
    <Layout>
      <Head>
        <title>products</title>
        <meta description="all yarns" />
      </Head>
      <div css={productInfoStyle}>
        <Image
          data-test-id="product-image"
          alt="yarn image"
          src={`/allyarns/${props.product.id}.jpeg`}
          width="500"
          height="300"
        />
        <span>
          <h1>{props.product.name}</h1>

          <div>id: {props.product.id}</div>
          <div>name: {props.product.name}</div>
          <div>type: {props.product.type}</div>
          <div>color: {props.product.color}</div>
          <div data-test-id="product-price">
            price: {props.product.price} ???{' '}
          </div>

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

          <button css={yarnAddButtonStyle} data-test-id="product-add-to-cart">
            yarn add
          </button>
        </span>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const productId = context.query.productId;
  // get all products from database
  // const allProducts = await getAllProducts();
  // const matchingProduct = allProducts.find((product) => {
  //   // eslint-disable-next-line sonarjs/prefer-single-boolean-return
  //   if (product.id === productId) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  const matchingProduct = await getProduct(productId);
  console.log(matchingProduct);
  return {
    props: {
      product: matchingProduct,
    },
  };
}
