DROP DATABASE IF EXISTS Bamazon;

CREATE DATABASE Bamazon;

USE bamazon;

CREATE TABLE products (
id INTEGER AUTO_INCREMENT NOT NULL,
product_name VARCHAR (45) NOT NULL,
department_name VARCHAR (45) NOT NULL,
price DECIMAL (10, 4) NOT NULL,
stock_quantity INT (25) NOT NULL,
PRIMARY KEY(id);
);

SELECT * FROM  products;

INSERT INTO products (product_name, product_sales, department_name, price, stock_quantity)
VALUES ("War of the Worlds", 0, "Video Games", 59.99, 100),
  ("Beyblades", 0, "Video Games", 39.99, 150),
  ("Chinchillas", 0, "Food and Drink", 240.50, 37),
  ("Tank Tops", 0, "Apparel", 9.99, 500),
  ("Iphone Cases", 0, "Necessities", 4.50, 450),
  ("Coconuts", 0, "Necessities", 22.80, 1000),
  ("V for Vendetta", 0, "Films", 12.59, 20),
  ("Hot Tub Time Machine", 0, "Films", 8.50, 123),
  ("Yahtzee", 0, "Board Games", 19.99, 34),
  ("Monopoly", 0, "Board Games", 29.50, 45);
  
-- 
--   CREATE TABLE departments(
--   department_id INT AUTO_INCREMENT NOT NULL,
--   department_name VARCHAR(45) NOT NULL,
--   over_head_costs DECIMAL(10,2) NOT NULL,
--   total_sales DECIMAL(15,2) NOT NULL,
--   primary key(department_id)
-- );
-- 
-- select * from departments;
-- 
-- INSERT INTO departments (department_name, over_head_costs, total_sales)
-- VALUES ("Video Games", 200, 300),
--   ("Food and Drink", 100, 200),
--   ("Apparel", 40, 80),
--   ("Necessities", 200, 100),
--   ("Films", 25, 20),
--   ("Board Games", 10, 100);