import { config } from 'dotenv-safe';
import postgres from 'postgres';

// THIS LOADS ALL ENVIRONMENT VARIABLES FROM A .env FILE FOR ALL CODE AFTER THIS LINE

config();

const sql = postgres();
console.log(
  await sql`
 SELECT * FROM products;
 `,
);

sql.end();
