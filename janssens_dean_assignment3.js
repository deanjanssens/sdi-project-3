//alert("JavaScript works!");


//Dean Janssens
//SDI 1406
//June 19, 2014
//Project 3



var sauteIngredients = ["1 lb cooked diced chicken",
                   "1 cup diced green pepper",
                   "1 cup diced white onion",
                   "2 teaspoons chili powder",
                   "1 Tablespoon minced garlic"];

var totalEnchiladas = 12
var bakingTime = 35
var suppliesSetUp = confirm("Are all your ingredients and cooking supplies ready?");

//Procedure
var suppliesReady = function (suppliesSetUp){
    var answer = suppliesSetUp;
    if (answer === true) {
        console.log("You are ready to make the enchiladas.");
    } else if (answer === false) {   
        console.log("Please gather all ingredients and cooking supplies before beginning.");
    
    }
    
};


//Array Function
  var firstStep = function (firstIngredients) {
    var lastIngredient = sauteIngredients.pop();      
    console.log("The first ingredients are " + firstIngredients + ", and " + lastIngredient + ".");
    sauteIngredients.push("1 Tablespoon minced garlic");
    for (var i = 0; i < sauteIngredients.length; i++) {
        console.log("Added " + firstIngredients[i] + " to frying pan.");
    };
    console.log("Time to saute!");
    return firstIngredients;
  };
//Main Code
suppliesReady(suppliesSetUp);
firstStep(sauteIngredients);








