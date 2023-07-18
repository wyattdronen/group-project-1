var resultTextEl = document.querySelector('result-text');
var resultContentEl = document.querySelector('result-content');
var searchFormEl = document.querySelector('search-form');







var endpoint = "https://thecocktaildb.com/api/json/v1/1/random.php"

$.ajax({
  url: requestUrl + $(this).text(),
  method: 'GET',
  contentType: "application/json",
  dataType: 'json',
  sucess: function (results) {
    console.log(result)
})
// }).then(function (response) {
//   console.log('Ajax Reponse \n-------------');
//   console.log(response);
// });



//  $.getJSON("https://https://thecocktaildb.com/api/json/v1/1/random.php", function (data) {
//    var resources = data.resources.map(resource => `<a href="${resource.strDrink}">${resouce.strInstructions}</a><br?`),
//     text = `<h2>`${data.resources}
//   })








  // console.log(fetch("www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"));

  // fetch(https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita)










  // function searchCocktail() {
  //   const searchInput = document.getElementById('searchInput').value;
  //   const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`;

  //   fetch(apiUrl)
  //     .then(response => response.json())
  //     .then(data => {
  //       // Check if the API returned any drinks
  //       if (data.drinks) {
  //         // Assuming the API returns an array of drinks (even if only one drink matches the search)
  //         const firstDrink = data.drinks[0];
  //         const cocktailName = firstDrink.strDrink;

  //         // Display the cocktail name in the div with id "cocktailName"
  //         const cocktailNameDiv = document.getElementById('cocktailName');
  //         cocktailNameDiv.textContent = `Drink Name: ${cocktailName}`;
  //       } else {
  //         // If no drinks were found for the given search, display a message
  //         const cocktailNameDiv = document.getElementById('cocktailName');
  //         cocktailNameDiv.textContent = 'No matching drinks found.';
  //       }
  //     })
  //     .catch(error => {
  //       // Handle any errors that occur during the API call
  //       console.error('Error fetching data:', error);
  //     });
  // }
