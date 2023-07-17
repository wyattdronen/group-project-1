// Event listener for when the user clicks on the search button
$("#search-btn").on('click', function (event) {
    event.preventDefault();
    // Gets the users input
    var cocktailName = $("#search-input").val().trim();
    //clear input box after search
    $("#search-input").val("");
  
    localStorage.setItem("nameOfCocktail", cocktailName);
  
    // Calls the above function using the users input
    getCocktail(cocktailName);
  });
  // Added a keyup event listener so the user can enter a cocktail and press enter on the keyboard instead of clicking the button
$("#search-input").on("keyup", function (event) {
    if (event.keyCode === 13) {
  
      event.preventDefault();
  
      $("#search-btn").click();
  
    };
  });
