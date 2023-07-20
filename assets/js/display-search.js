var resultTextEl = document.querySelector('result-text');
var resultContentEl = document.querySelector('result-content');
var searchFormEl = document.querySelector('search-form');
var fetchButton = document.getElementById('search-button');

var cocktailDataObject = JSON.parse(localStorage.getItem("data"));
var storageArray = JSON.parse(localStorage.getItem("Favourites")) || [];


//random cocktail
var requestUrl = 'https://thecocktaildb.com/api/json/v1/1/random.php';

fetch(requestUrl)
  .then(response => response.json())
  .then(data => {
    const apiData = data;
    console.log(apiData)
    //drink name from API
    const drinkName = data.drinks[0].strDrink;
    //drink recipe instructions
    const drinkInst = data.drinks[0].strInstructions;
    //drink image
    const drinkImage = data.drinks[0].strDrinkThumb
    //ingredients 1-7
    const ingredientOne = data.drinks[0].strIngredient1;
    const ingredientTwo = data.drinks[0].strIngredient2;
    const ingredientThree = data.drinks[0].strIngredient3;
    const ingredientFour = data.drinks[0].strIngredient4;
    const ingredientFive = data.drinks[0].strIngredient5;
    const ingredientSix = data.drinks[0].strIngredient6;
    const ingredientSeven = data.drinks[0].strIngredient7;
    //measurements of ingredients
    const measureOne = data.drinks[0].strMeasure1;
    const measureTwo = data.drinks[0].strMeasure2;
    const measureThree = data.drinks[0].strMeasure3;
    const measureFour = data.drinks[0].strMeasure4;
    const measureFive = data.drinks[0].strMeasure5;
    const measureSix = data.drinks[0].strMeasure6;
    const measureSeven = data.drinks[0].strMeasure7;



    console.log(drinkName)
    console.log(drinkInst)
    console.log(drinkImage)
    console.log((ingredientOne + " " + ingredientTwo + " " + ingredientThree + " " + ingredientFour + " " + ingredientFive + " " + ingredientSix + " " + ingredientSeven));


    document.getElementById("drink-result").innerHTML = drinkName;
    document.getElementById('ingredients').innerHTML = (measureOne + ingredientOne + " " + measureTwo + ingredientTwo + " " + measureThree + ingredientThree + " " + measureFour + ingredientFour + " " + measureFive + ingredientFive + " " + measureSix + ingredientSix + " " + measureSeven + ingredientSeven);
    document.getElementById("method").innerHTML = drinkInst;
    // document.getElementById("drink-image").innerHTML = drinkImage;
  })




// Making function for the copy icon to copy recipe
function copyRecipe() {
  var textCopy = document.getElementById("ingredients").innerText;
  var textElem = document.createElement("textarea");
  document.body.appendChild(textElem);
  textElem.value = textCopy;
  textElem.select();

  if (navigator.clipboard) {
    navigator.clipboard.writeText(textCopy).then(() => {
      //alert("Copied!"); // for checking if it works? /
      //!make a modal???("Copied!");
    })
  } else {
    console.log("Browser not compatible") // for checking if errors
  }
};

$("#add-to-favourites").on('click', function () {
  // Validation to stop the user adding multiples of the same cocktail
  if (!storageArray.includes(cocktailDataObject[0].name)) {
    // Pushes current cocktail to empty array (storageArray)
    storageArray.push(cocktailDataObject[0].name);
    //Sets index of storage array to memory
    localStorage.setItem("Favourites", JSON.stringify(storageArray));
    //Appends to page
    $("#favourite-cocktails").append(`<li>${cocktailDataObject[0].name}</li>`);
  } else {
    console.log("You already have this saved");
  };
});

// Button to clear all favourites
$("#delete-favourites").on('click', function () {
  localStorage.removeItem("Favourites");
  location.reload();
});


fetchButton.addEventListener('click', fetch(requestUrl));





