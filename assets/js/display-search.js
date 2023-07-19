var resultTextEl = document.querySelector('result-text');
var resultContentEl = document.querySelector('result-content');
var searchFormEl = document.querySelector('search-form');
var fetchButton = document.getElementById('search-button');




var requestUrl = 'https://thecocktaildb.com/api/json/v1/1/random.php';

fetch(requestUrl)
  .then(response => response.json())
  .then(data => {
    const apiData = data;
    console.log(apiData)
    const drinkName = data.drinks[0].strDrink;
    const drinkInst = data.drinks[0].strInstructions;
    const drinkImage = data.drinks[0].strDrinkThumb
    const IngredientOne = data.drinks[0].strIngredient1;
    const IngredientTwo = data.drinks[0].strIngredient2;
    const IngredientThree = data.drinks[0].strIngredient3;
    const IngredientFour = data.drinks[0].strIngredient4;
    const IngredientFive = data.drinks[0].strIngredient5;


    console.log(drinkName)
    console.log(drinkInst)
    console.log(drinkImage)
    console.log((IngredientOne + " " + IngredientTwo + " " + IngredientThree + " " + IngredientFour + " " + IngredientFive))

  })
    //create elements
    const drinkNameEl = document.createElement('h2');
    const drinkInstEl = document.createElement('p');
    //set text of elements
    drinkNameEl.textContent = Data.drinks[0].strDrink;
    drinkInstEl.textContent = Data.drinks[0].strInstructions;

    

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








//         //Appending the dynamically generated html to the div associated with the id="users"
//         //Append will attach the element as the bottom most child.
//         usersContainer.append(userName);
//         usersContainer.append(userUrl);
//       }
    // });
// }
// fetchButton.addEventListener('click', getApi);






// //displays results from API in new container
// function displayResults(data) {
//   var resultsContainer = $('#results-container');
//   resultsContainer.empty();
//   $.each(data, function (index, strDrink) {
//     //creates element targeting class "result-item"**
//     var resultElement = $('<div class= "result-item">');
//     // customize  to display the relevant data from the API response
//     var titleElement = $('<h3>').text(item.title);
//     var descriptionElement = $('<p>').text(item.description);

//     //append title and description to results element
//     resultsElement.append(titleElement, descriptionElement);
//     resultsContainer.append(resultElement);

//     //click event
//     $('#search-button').click(function () {
//       fetchDataFromApi();
//     })
//   });
// }





  // function searchCocktail() {
  //   const searchInput = document.getElementById('searchInput').value;
  //   const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`;

