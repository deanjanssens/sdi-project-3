//alert("JavaScript works!");
//Dean Janssens
//SDI 1406
//June 19, 2014
//Project 3
var suppliesSetUp = confirm("Are all your ingredients and cooking supplies ready?");
var sauteIngredients = ["1 lb cooked diced chicken",
    "1 cup diced green pepper",
    "1 cup diced white onion",
    "2 teaspoons chili powder",
    "1 Tablespoon minced garlic"
];
var moreIngredients = ["tortillas",
    "1 Can Enchilada Sauce",
    "additional can of Enchilada Sauce",
    "16 ounce jar of salsa",
    "8 ounce package of Mexican Blend Cheese"
];
var totalEnchiladas = 12;
var bakingTime = 35;
var theHost = 1;
var comingToDinner = 3;
var guestsHaveArrived = true;
var enchiladasReady = true;
var ovenPreheating = true;


//Procedure
var suppliesReady = function (suppliesSetUp) {
    var answer = suppliesSetUp;
    if (answer === true) {
        console.log("You are ready to make the enchiladas and prepare for a dinner party.");
    } else {
        console.log("Please gather all ingredients and cooking supplies before beginning.");

    }

};


//Array Function
var firstStep = function (firstIngredients, preheat) {
    var ingredients1 = firstIngredients;
    var lastIngredient = sauteIngredients.pop();
    console.log("The first ingredients are " + firstIngredients + ", and " + lastIngredient + ".");
    sauteIngredients.push("1 Tablespoon minced garlic");
    while (preheat === true && sauteIngredients.length < 5) {
        for (var i = 0; i < sauteIngredients.length; i++) {
            console.log("Added " + firstIngredients[i] + " to frying pan.");

        }

    }
    console.log("Time to saute!");
    return ingredients1;
};

//String Function
var nextSteps = function (secondProcessIngredients) {
    var ingredients2 = secondProcessIngredients;
    console.log("Add half the " + moreIngredients[3] + " to the chicken mixture.");
    console.log("Fill baking dish with " + moreIngredients[1] + ".");
    console.log("Spoon mixture onto " + moreIngredients[0] + ", roll them and place seam side down into baking dish.");
    console.log("Cover enchiladas with " + moreIngredients[2] + ".");
    console.log("Cover baking dish with foil and bake for 35 minutes.");
    return ingredients2;
};

//Math Function 1

var timeToBake = function (ovenTimer) {
    var minutes = ovenTimer;
    while (ovenTimer >= 0) {
        console.log("There are " + ovenTimer + " minutes baking time left.");
        ovenTimer -= 5;
    }
    console.log("Remove foil, cover with cheese and cook for 5 more minutes or until cheese is melted.");
    console.log("Enchiladas are ready to serve.");
    return minutes;
};

//Boolean Function

var timeForTheDinner = function (attendees, dinnerReady) {
    if (attendees === true) {
        console.log("Guests have arrived.");
        if (dinnerReady === true) {
            console.log("Place the enchiladas on the table and dig in.")
        } else {
            console.log("Dinner is not yet ready to be served")
        }
        return true;
    }



};

//Math Function 2
var enchiladaCalculation = function (theCook, theGuests, totalEnchiladasAvailable) {
    var enchiladaDivision = totalEnchiladasAvailable / (theCook + theGuests);
    console.log("Each person at the dinner party will get " + enchiladaDivision + " enchiladas.");
    return enchiladaDivision;
};

//JSON Code

var dinnerGuestInformation = function () {
    console.log("These are my dinner guests and their information.");
    for (var information in dinnerGuests.guests) {
        for (var additionalInformation in dinnerGuests.guests[information]) {
            console.log(additionalInformation + ": " + dinnerGuests.guests[information][additionalInformation]);
        };
    };
};


//Main Code


suppliesReady(suppliesSetUp);
var ingredients1 = firstStep(sauteIngredients, ovenPreheating);
var ingredients2 = nextSteps(moreIngredients);
var minutes = timeToBake(bakingTime);
var guestsArrivedDinnerReady = timeForTheDinner(guestsHaveArrived, enchiladasReady);
var enchiladaDivision = enchiladaCalculation(theHost, comingToDinner, totalEnchiladas);


console.log("The Ingredients to make the enchiladas are: " + ingredients1 + ", " + ingredients2 + ".");
console.log("The total cooking time for the enchiladas is " + minutes + "minutes.");
console.log("Each person can have " + enchiladaDivision + " enchiladas.");
console.log("It is " + guestsArrivedDinnerReady + " that dinner is ready and the guests have arrived.");
dinnerGuestInformation();