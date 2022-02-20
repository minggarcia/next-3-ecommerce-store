exports.up = async (sql) => {
  console.log('creating table yarns ...');
  await sql`
	CREATE TABLE yarns (
		id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		name varchar(50) NOT NULL,
		type varchar(50) NOT NULL,
		color varchar(20) NOT NULL,
		price integer NOT NULL
	);`;
};

exports.down = async (sql) => {
  console.log('dropping table products...');
  await sql`
	DROP TABLE yarns`;
};
