-- CREATE products TABLE
CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(50) NOT NULL,
  type varchar(50) NOT NULL,
  color varchar(20) NOT NULL,
  price integer NOT NULL
);

-- INSERTING a product (C in CRUD - CREATE)
INSERT INTO products
(name, type, color, price)
VALUES
('Baby Merino', 'Merino', 'Ecru', 6),
('Alpaca Classic', 'Alpaca', 'Grey', 8),
('Cotton Wool', 'Cotton', 'Beige', 5),
('Mohair Haze', 'Mohair', 'Turquoise', 10),
('Kidsilk Haze', 'Silk', 'Green', 15),
('Pure Cashmere', 'Cashmere', 'Pink', 44);

-- READ A PRODUCT (R in CRUD - READ)

SELECT * FROM products;
