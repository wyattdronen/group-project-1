#Happy Hour

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




## Demo

Insert gif or link to demo


## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

