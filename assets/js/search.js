var storageArray = JSON.parse(localStorage.getItem("Favourite")) || [];
var cocktailDataObject = JSON.parse(localStorage.getItem("data"));

async function getDrinkInfo(drink) { //fetches data

  replaceDrink()

  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`
    const response = await axios.get(url);
    const recipe = response.data
    console.log(recipe)
    appendDrink(recipe.drinks)
  }
  catch (error) {
    console.log(`Error: ${error}`)
  }
  finally {
    console.log("Request fufilled.")
  }
}

getDrinkInfo()

let mainDiv = document.querySelector("#main-container")
let mainList = document.querySelector("#main-list")
mainDiv.append(mainList)


function appendDrink(drinks) {
  drinks.forEach(drink => {
    const title = document.createElement('p')
    title.textContent = `Drink: ${drink.strDrink}`
    title.classList.add("drink-title")
    mainList.append(title)

    const img = document.createElement('img')
    img.src = drink.strDrinkThumb
    img.classList.add("drink-thumbnail")
    mainList.append(img)

    const ingredientsTitle = document.createElement('p')
    ingredientsTitle.textContent = `Ingredients:`
    ingredientsTitle.classList.add("ingredients-title")
    mainList.append(ingredientsTitle)

    const ingredientsLIFirst = document.createElement('li')
    let ingredientsFirst = drink.strIngredient1
    let measurementsFirst = drink.strMeasure1
    ingredientsLIFirst.textContent = `${ingredientsFirst}: ${measurementsFirst}`
    ingredientsTitle.append(ingredientsLIFirst)

    if (drink.strIngredient2 !== null) {
      const ingredientsLISecond = document.createElement('li')
      let ingredientsSecond = drink.strIngredient2
      let measurementsSecond = drink.strMeasure2
      ingredientsLISecond.textContent = `${ingredientsSecond}: ${measurementsSecond}`
      ingredientsTitle.append(ingredientsLISecond)
    }

    if (drink.strIngredient3 !== null) {
      const ingredientsLIThird = document.createElement('li')
      let ingredientsThird = drink.strIngredient3
      let measurementsThird = drink.strMeasure3
      ingredientsLIThird.textContent = `${ingredientsThird}: ${measurementsThird}`
      ingredientsTitle.append(ingredientsLIThird)
    }

    if (drink.strIngredient4 !== null) {
      const ingredientsLIFourth = document.createElement('li')
      let ingredientsFourth = drink.strIngredient4
      let measurementsFourth = drink.strMeasure4
      ingredientsLIFourth.textContent = `${ingredientsFourth}: ${measurementsFourth}`
      ingredientsTitle.append(ingredientsLIFourth)
    }

    if (drink.strIngredient5 !== null) {
      const ingredientsLIFifth = document.createElement('li')
      let ingredientsFifth = drink.strIngredient5
      let measurementsFifth = drink.strMeasure5
      ingredientsLIFifth.textContent = `${ingredientsFifth}: ${measurementsFifth}`
      ingredientsTitle.append(ingredientsLIFifth)
    }

    if (drink.strIngredient6 !== null) {
      const ingredientsLISixth = document.createElement('li')
      let ingredientsSixth = drink.strIngredient6
      let measurementsSixth = drink.strMeasure6
      ingredientsLISixth.textContent = `${ingredientsSixth}: ${measurementsSixth}`
      ingredientsTitle.append(ingredientsLISixth)
    }

    if (drink.strIngredient7 !== null) {
      const ingredientsLISeventh = document.createElement('li')
      let ingredientsSeventh = drink.strIngredient7
      let measurementsSeventh = drink.strMeasure7
      ingredientsLISeventh.textContent = `${ingredientsSeventh}: ${measurementsSeventh}`
      ingredientsTitle.append(ingredientsLISeventh)
    }

    if (drink.strIngredient8 !== null) {
      const ingredientsLIEighth = document.createElement('li')
      let ingredientsEighth = drink.strIngredient8
      let measurementsEighth = drink.strMeasure8
      ingredientsLIEighth.textContent = `${ingredientsEighth}: ${measurementsEighth}`
      ingredientsTitle.append(ingredientsLIEighth)
    }

    if (drink.strIngredient9 !== null) {
      const ingredientsLINinth = document.createElement('li')
      let ingredientsNinth = drink.strIngredient9
      let measurementsNinth = drink.strMeasure9
      ingredientsLINinth.textContent = `${ingredientsNinth}: ${measurementsNinth}`
      ingredientsTitle.append(ingredientsLINinth)
    }

    if (drink.strIngredient10 !== null) {
      const ingredientsLITenth = document.createElement('li')
      let ingredientsTenth = drink.strIngredient10
      let measurementsTenth = drink.strMeasure10
      ingredientsLITenth.textContent = `${ingredientsTenth}: ${measurementsTenth}`
      ingredientsTitle.append(ingredientsLITenth)
    }

    if (drink.strIngredient11 !== null) {
      const ingredientsLIEleventh = document.createElement('li')
      let ingredientsEleventh = drink.strIngredient11
      let measurementsEleventh = drink.strMeasure11
      ingredientsLIEleventh.textContent = `${ingredientsEleventh}: ${measurementsEleventh}`
      ingredientsTitle.append(ingredientsLIEleventh)
    }

    if (drink.strIngredient12 !== null) {
      const ingredientsLITwelth = document.createElement('li')
      let ingredientsTwelth = drink.strIngredient12
      let measurementsTwelth = drink.strMeasure12
      ingredientsLITwelth.textContent = `${ingredientsTwelth}: ${measurementsTwelth}`
      ingredientsTitle.append(ingredientsLITwelth)
    }

    if (drink.strIngredient13 !== null) {
      const ingredientsLIThirteen = document.createElement('li')
      let ingredientsThirteen = drink.strIngredient13
      let measurementsThirteen = drink.strMeasure13
      ingredientsLIThirteen.textContent = `${ingredientsThirteen}: ${measurementsThirteen}`
      ingredientsTitle.append(ingredientsLIThirteen)
    }

    if (drink.strIngredient14 !== null) {
      const ingredientsLIFourteen = document.createElement('li')
      let ingredientsFourteen = drink.strIngredient14
      let measurementsFourteen = drink.strMeasure14
      ingredientsLIFourteen.textContent = `${ingredientsFourteen}: ${measurementsFourteen}`
      ingredientsTitle.append(ingredientsLIFourteen)
    }

    if (drink.strIngredient15 !== null) {
      const ingredientsLIFifteen = document.createElement('li')
      let ingredientsFifteen = drink.strIngredient15
      let measurementsFifteen = drink.strMeasure15
      ingredientsLIFifteen.textContent = `${ingredientsFifteen}: ${measurementsFifteen}`
      ingredientsTitle.append(ingredientsLIFifteen)
    }

    const instructionsSection = document.createElement('p')
    let instructions = drink.strInstructions
    instructionsSection.textContent = `Instructions: ${instructions}`
    mainList.append(instructionsSection)
    instructionsSection.classList.add("instructions-section")

  });
}

const form = document.querySelector("form")
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector("#drink-form").value
  document.querySelector("#drink-form").value = ""
  getDrinkInfo(inputValue)
})

function replaceDrink() {
  const removeDiv = document.querySelector("#main-list")
  while (removeDiv.lastChild) {
    removeDiv.removeChild(removeDiv.lastChild)
  }
}


$("#favorite").on('click', function () {
  // Validation to stop the user adding multiples of the same cocktail
  if (!storageArray.includes(cocktailDataObject[0].name)) {
      // Pushes current cocktail to empty array (storageArray)
      storageArray.push(cocktailDataObject[0].name);
      //Sets index of storage array to memory
      localStorage.setItem("Favourite", JSON.stringify(storageArray));
      //Appends to page
      $("#favorite").append(`<li>${cocktailDataObject[0].name}</li>`);
  } else {
      console.log("You already have this saved");
  };
});

// Button to clear all favourites
$("#delete-favorites").on('click', function () {
  localStorage.removeItem("Favourite");
  location.reload();
});