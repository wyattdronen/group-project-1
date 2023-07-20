
  function checkAge() {
    const userBirthdate = prompt('Please enter your birthdate (DD-MM-YYYY):');

    if (userBirthdate === null || userBirthdate === '') {
      // User canceled or didn't enter anything
      redirectToAccessDeniedPage();
      return;
    }

    const today = dayjs();
    const twentyOneYearsAgo = today.subtract(21, 'year');
    const birthdate = dayjs(userBirthdate);

    if (birthdate.isBefore(twentyOneYearsAgo)) {
      // User is 21 or older, allow access to the site
      alert('Welcome! You are old enough to enter the site.');
      // Here you can redirect the user to the main page or load the content of the site.
    } else {
      // User is younger than 21, deny access to the site
      redirectToAccessDeniedPage();
    }
  }

  function redirectToAccessDeniedPage() {
    // Redirect the user to an "access denied" page or show an appropriate message
    window.location.href = 'access-denied.html';
  }

  // Trigger the age verification prompt when the page finishes loading
  window.onload = checkAge;



// var searchFormEl = document.querySelector('#search-form');

// function handleSearchFormSubmit(event) {
//   event.preventDefault();

//   var searchInputVal = document.querySelector('#search-input').value;
//   var formatInputVal = document.querySelector('#format-input').value;

//   if (!searchInputVal) {
//     console.error('You need to enter something to search!');
//     return;
//   }

//   var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

//   location.assign(queryString);
// }

// searchFormEl.addEventListener('submit', handleSearchFormSubmit);

// // Event listener for when the user clicks on the search button
// $("#search-btn").on('click', function (event) {
//   event.preventDefault();
//   // Gets the users input
//   var cocktailName = $("#search-input").val().trim();
//   //clear input box after search
//   $("#search-input").val("");

//   localStorage.setItem("nameOfCocktail", cocktailName);

//   // Calls the above function using the users input
//   getCocktail(cocktailName);
// });
//  // Added a keyup event listener so the user can enter a cocktail and press enter on the keyboard instead of clicking the button
// $("#search-input").on("keyup", function (event) {
//   if (event.keyCode === 13) {

//     event.preventDefault();

//     $("#search-btn").click();

//   };
// });
// // Event listener for when the user clicks on the search button
// $("#search-btn").on('click', function (event) {
//     event.preventDefault();
//     // Gets the users input
//     var cocktailName = $("#search-input").val().trim();
//     //clear input box after search
//     $("#search-input").val("");
  
//     localStorage.setItem("nameOfCocktail", cocktailName);
  
//     // Calls the above function using the users input
//     getCocktail(cocktailName);
//   });
//   // Added a keyup event listener so the user can enter a cocktail and press enter on the keyboard instead of clicking the button
// $("#search-input").on("keyup", function (event) {
//     if (event.keyCode === 13) {
  
//       event.preventDefault();
  
//       $("#search-btn").click();
  
//     };
//   });

