# Happy Hour

This is a website for cocktail lovers. It's designed to help narrow the huge potential options available to those of us with a well-stocked bar. Throwing a party? Not sure what to do with that bottle of uzo your uncle bought you in Greece last summer? Tired of the same old margarita's, negroni's and old fashioneds? We want to help by offering a fast, fun array of recipes based on what the user feels like drinking and what they have in stock.


Screenshot from a Working Page of the Website

Link to Working Version
## API Reference

#### Get all items

```http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Acknowledgements


## Authors

- [Andrew Erickson] (https://github.com/Tiny-Tigers)
- [Beth Haynes]  (https://github.com/beffylaureen)
- [Wyatt Dronen]  (https://github.com/wyattdronen)
- [Jon Armajani]  (https://github.com/JJumangi)




## Demo

Insert gif or link to demo


## Deployment


[link to app] (https://wyattdronen.github.io/group-project-1/)



## Screenshots
index
![Alt text](./assets/images/home.jpg?raw=true "screenshot")
search
![Alt text](./assets/images/search.jpg?raw=true "screenshot")
search-display
![Alt text](./assets/images/random.jpg?raw=true "screenshot")


## Resources Used

A palette generator was used to extract the hex values of the main colors in the hero image.  At the time of this writing the particular palette generator used showed up as a non-secured website so the web address will not be included in this documentation.  After the hex values were retrieved, colorhexa.com was used to retrieve the hex values of the complementary colors of the main colors.  The complementary colors were used in the styling.

Background hero image is from Shutterstock.


Two API's were used to have 2 options. One being a random cocktail generator and the other a search input generator.

