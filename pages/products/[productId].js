import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import yarnsDatabase from '../util/database';

export default function SingleProduct(props) {
  return (
    <Layout>
      <Head>
        <title>{props.yarn.type}</title>
        <meta description="all yarns" />
      </Head>
      <h1>Yarn {props.yarn.name}</h1>
      <Image
        data-test-id="product-image"
        alt="yarn image"
        src={`/allyarns/${props.yarn.id}.jpg`}
        width="300"
        height="300"
      />

      <div>id: {props.yarn.id}</div>
      <div>name: {props.yarn.name}</div>
      <div>type: {props.yarn.type}</div>
      <div>color: {props.yarn.color}</div>
      <div data-test-id="product-price">price: {props.yarn.price}</div>
      <input type="number" id="quantity" name="quantity" min="1" />
    </Layout>
  );
}

export function getServerSideProps(context) {
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
      // productId: productId,
    },
  };
}
