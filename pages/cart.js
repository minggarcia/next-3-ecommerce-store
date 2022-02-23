import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';

// import { getParsedCookie, setParsedCookie } from './util/cookies';

export default function Cart(props) {
  // const [isInCart, setIsInCart] = useState(props.addedYarnToCart);

  //   function addToCart(id) {
  //     // get cookie value
  //     const cookieValue = getParsedCookie('cart' || '[]');

  //     // update the cookie
  //     const existIdOnArray = cookieValue.some((cookieObject) => {
  //       return cookieObject.id === id;
  //     });
  //     let newCookie;

  //     if (existIdOnArray) {
  //       const newQuantity = quantity + yarnAddedToCart.quantity;

  //       newCookie = [
  //         ...cookieValue,
  //         {
  //           id: id,
  //           quantity: newQuantity,
  //           name: props.yarn.name,
  //         },
  //       ];
  //       setIsInCart(newCookie);
  //       setParsedCookie('cart', newCookie);

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
