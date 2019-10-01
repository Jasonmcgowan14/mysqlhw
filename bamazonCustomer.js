var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    displayproducts();
  });
  
function displayproducts() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.table(res);
      sellproducts();
    });
  }

function sellproducts(){
	inquirer.prompt([
	{
		name: "ID",
		type: "input",
		message:"Please enter Item ID you like to purhcase.",
		filter:Number
	},
	{
		name:"Quantity",
		type:"input",
		message:"How many items do you wish to purchase?",
		filter:Number
	},

 ]).then(function(answers){
    var productrequired = answers.ID;
    console.log(productrequired);
    var quantityrequired = answers.Quantity;
    console.log(quantityrequired);
 	processOrder(productrequired, quantityrequired);
 });
};

function processOrder(ID, quantityDemanded){
	connection.query('SELECT * FROM `products` WHERE `item_id` = ?', [ID], function(err, res){

		console.log(res[0].stock_quantity);
		if(quantityDemanded <= res[0].stock_quantity){
			var totalCost = res[0].price * quantityDemanded;
			console.log("You have purchased " + quantityDemanded + " " +res[0].product_name + " for a total cost of " + totalCost + " dollars");
			connection.query("UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?", [quantityDemanded, ID]);
			connection.query('SELECT * FROM `products` WHERE `item_id` = ?', [ID], function(err, response){
				console.table(response)
			});
		} else{
			console.log("We are low or out of stock of " + res[0].product_name + ". We can not complete your order.");
		};
	});
};
