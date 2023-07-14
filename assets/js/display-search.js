async function fetchCocktails() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Process the received data here
    console.log(data);
    // You can do further operations with the data, such as displaying it on a webpage or manipulating it as needed.
  } catch (error) {
    console.log("Error:", error);
    // Handle the error gracefully, such as displaying an error message to the user.
  }
}

// Call the function to initiate the API fetch
fetchCocktails();



