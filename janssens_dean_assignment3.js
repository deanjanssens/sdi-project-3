//alert("JavaScript works!");


//Dean Janssens
//SDI 1406
//June 19, 2014
//Project 3



var sauteIngredients = ["1 lb cooked chicken",
                   "1 cup diced green pepper",
                   "1 cup diced white onion",
                   "2 teaspoons chili powder",
                   "2 cloves garlic, minced"];
var cookingTime = 35;
var sauteing = true;



//Array Function

var firstStep  = function (firstIngredients){
    var lastIngredient = sauteIngredients.pop();
    console.log("In frying pan add " + firstIngredients + " and " + lastIngredient + ".");
}

firstStep(sauteIngredients);





