const products = [
  { name: 'Baby Merino', type: 'Merino', color: 'Ecru', price: 6 },
  {
    name: 'Alpaca Classic',
    type: 'Alpaca',
    color: 'Grey',
    price: 8,
  },
  { name: 'Cotton Wool', type: 'Cotton', color: 'Beige', price: 5 },
  {
    name: 'Mohair Haze',
    type: 'Mohair',
    color: 'Turquoise',
    price: 10,
  },
  { name: 'Kidsilk Haze', type: 'Silk', color: 'Green', price: 15 },
  {
    name: 'Pure Cashmere',
    type: 'Cashmere',
    color: 'Pink',
    price: 44,
  },
];

exports.up = async (sql) => {
  await sql`
	INSERT INTO products ${sql(products, 'name', 'type', 'color', 'price')}`;
};

exports.down = async (sql) => {
  for (const product of products) {
    await sql`
	DELETE FROM
	products
	WHERE
	name = ${product.name} AND
	type = ${product.type} AND
	color = ${product.color} AND
	price = ${product.price}  `;
  }
};
