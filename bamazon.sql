CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
item_id INT AUTO_INCREMENT,
   product_name VARCHAR(100),
   department_name VARCHAR(100),
   price INT(50),
   stock_quantity INT(20),
   PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("sneakers", "clothing", 25, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("steak", "food", 5, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("socks", "clothing", 5, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shorts", "clothing", 15, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("watch", "electronics", 30, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("phone charger", "electronics", 40, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("backpack", "clothing", 20, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("yogurt", "food", 4, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("chicken", "food", 4, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("milk", "food", 3, 10);
