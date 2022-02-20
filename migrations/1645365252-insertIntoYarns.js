const yarns = [
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
	INSERT INTO yarns ${sql(yarns, 'name', 'type', 'color', 'price')}`;
};

exports.down = async (sql) => {
  for (const yarn of yarns) {
    await sql`
	DELETE FROM
	yarns
	WHERE
	name = ${yarn.name} AND
	type = ${yarn.type} AND
	color = ${yarn.color} AND
	price = ${yarn.price}  `;
  }
};
