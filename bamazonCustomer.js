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
      console.log(res);
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
	connection.query('SELECT * FROM products WHERE item_id =' + ID, function(res){
		if(quantityDemanded <= res[ID].stock_quantity){
			var totalCost = res.price * quantityDemanded;
			console.log("The cost of " + quantityDemanded + " " +res[ID].product_name + " is " + totalCost );
			connection.query("UPDATE products SET stock_quantity = stock_quantity - " + Quantity + "WHERE item_id = " + ID);
		} else{
			console.log("We are low or out of stock of " + res[0].product_name + ". We can not complete your order.");
		};
	});
};
