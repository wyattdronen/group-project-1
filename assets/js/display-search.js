var resultTextEl = document.querySelector('result-text');
var resultContentEl = document.querySelector('result-content');
var searchFormEl = document.querySelector('search-form');
var fetchButton = document.getElementById('search-button');




var fetchDataFromApi = []



function getApi() {
  var requestUrl = 'https://thecocktaildb.com/api/json/v1/1/random.php';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //Using console.log to examine the data
      console.log(data);
    })
  console.log(data)
  //       for (var i = 0; i < data.length; i++) {
  //         //Creating a h3 element and a p element
  //         var userName = document.createElement('h3');
  //         var userUrl = document.createElement('p');

  //         //Setting the text of the h3 element and p element.
  //         userName.textContent = data[i].login;
  //         userUrl.textContent = data[i].url;

  //         //Appending the dynamically generated html to the div associated with the id="users"
  //         //Append will attach the element as the bottom most child.
  //         usersContainer.append(userName);
  //         usersContainer.append(userUrl);
  //       }
  //     });
  // }
  // fetchButton.addEventListener('click', getApi);







  // //calls API
  // var requestUrl = "https://thecocktaildb.com/api/json/v1/1/random.php"
  // $(document).ready(function () {
  //   function fetchDataFromApi() {
  //     $.ajax({
  //       url: requestUrl,
  //       method: 'GET',
  //       dataType: 'json',
  //       success: function (data) {
  //         displayResults(data);
  //       },
  //       error: function (error) {
  //         console.error('Error fetching data:', error);
  //       }
  //     });
  //   }
  // })

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

  // fetchDataFromApi();

  //  $.getJSON("https://https://thecocktaildb.com/api/json/v1/1/random.php", function (data) {
  //    var resources = data.resources.map(resource => `<a href="${resource.strDrink}">${resouce.strInstructions}</a><br?`),
  //     text = `<h2>`${data.resources}
  //   })











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
}
