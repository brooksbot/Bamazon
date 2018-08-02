// INITIALIZES THE NPM PACKAGES 
var mysql = require('mysql');
var inquirer = require('inquirer');
// INITIALIZES THE CONNECTION VARIABLE TO SYNC WITH MYSQL DATABASE
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "Bamazon"
})
// CREATES CONNECTION WITH THE SERVER AND MAKES THE TABLE WHEN CONNECTED SUCCESSFULLY
connection.connect(function(err){
    if(err) throw err;
    console.log("Connection successful!");
    makeTable();
})
// FUNCTION TO GET THE PRODUCTS TABLE FROM THE DATABASE AND PRINT RESULTS TO THE CONSOLE  
var makeTable = function(){
    // 
    connection.query("SELECT * FROM products", function(err,res){
        for(var i = 0; i < res.length; i++){
            console.log(res[i].itemid + " || " + res[i].productname + " || " + res[i].departmentname + " || " + res[i].price + " || " + res[i].stockquantity + "\n");
        }
        promptCustomer(res);
    })
}

var promptCustomer = function(res){
    inquirer.prompt([{
        type:'input',
        name:'choice',
        message:'What would you like to purchase? [Press Q to Quit]'
    }]).then(function(answer){
        var correct = false;
        if(answer.choice.toUpperCase()==="Q"){
            process.exit();
        }
        for(var i = 0; i < res.length; i++){
            if(res[i].productname === answer.choice) {
                correct = true;
                var product = answer.choice;
                var id = i;
                inquirer.prompt({
                    type:"input",
                    name:"quantity",
                    message: "How many would you like to buy?",
                    validate: function(value){
                        if(isNaN(value)===false){
                            return true;
                        } else {
                            return false;
                        }
                    }
                }).then(function(answer){
                    if((res[id].stockquantity - answer.quantity) > 0){
                        connection.query("UPDATE products SET stockquantity = ' " + (res[id].stockquantity - answer.quantity) + " ' WHERE productname = ' " + product + " ' ", function(err, res2){
                            console.log("Product Bought!");
                            makeTable();
                        })
                    } else {
                        console.log("Not a valid Selection!");
                        promptCustomer(res);
                    }
                })
            }
        }
        if(i === res.length && correct === false){
            console.log("Not a valid selection!");
            promptCustomer(res);
        }
    })
}