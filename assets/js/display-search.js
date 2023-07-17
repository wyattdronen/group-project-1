var resultTextEl = document.querySelector('result-text');
var resultContentEl = document.querySelector('result-content');
var searchFormEl = document.querySelector('search-form');

const userCardTemplate = document.querySelector("[data-user-template]")
const UserCardContainer = document.querySelector("[data-user-cards-container]")

fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
  .then(res => res.json())
  .then(data => {
    data.forEach(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      console.log(user)

      const header = card.querySelector("[data-cocktail]")
      const body = card.querySelector("[data-directions]")
      header.textContent = cocktail.name
      header.textContent = cocktail.directions
      cocktailCardContainer.append(card)

    })
  })



