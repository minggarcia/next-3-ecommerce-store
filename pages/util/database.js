import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

// CONNECT TO POSTGRESQL
const sql = postgres();

export async function readProducts() {
  const products = await sql`
SELECT * FROM products;
`;
  return products;
}

// const yarnsDatabase = [
//   { id: '1', name: 'Baby Merino', type: 'Merino', color: 'Ecru', price: 6 },
//   {
//     id: '2',
//     name: 'Alpaca Classic',
//     type: 'Alpaca',
//     color: 'Grey',
//     price: 8,
//   },
//   { id: '3', name: 'Cotton Wool', type: 'Cotton', color: 'Beige', price: 5 },
//   {
//     id: '4',
//     name: 'Mohair Haze',
//     type: 'Mohair',
//     color: 'Turquoise',
//     price: 10,
//   },
//   { id: '5', name: 'Kidsilk Haze', type: 'Silk', color: 'Green', price: 15 },
//   {
//     id: '6',
//     name: 'Pure Cashmere',
//     type: 'Cashmere',
//     color: 'Pink',
//     price: 44,
//   },
// ];

// export default yarnsDatabase;
