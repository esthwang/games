# Games
*The Maroon's* [Games Page](https://games.chicagomaroon.com).

## Requirements
1. Install `npm` (from node) and `yarn`. 

## Getting started
1. Navigate to project's root directory (the one with `package.json`).
2. Enter `yarn` in terminal. 
3. To start the dev server, enter `yarn start` in the terminal. 

The server is hotloading, meaning that it should automatically update upon changes made to the code. If this doesn't work, try the standard page refresh.

## Adding crosswords
1. Convert your crossword to a JSON file in the format defined by the [example file](./examples/crosswords/2018-12-30&#32;Test&#32;1.json). Note: the entries must be in increasing numeric order.
2. Name your crossword in the following format: 
```
YYYY-MM-DD {Crossword Name}.json
```
   where the date is day of publication.

3. Add your crossword to the [crosswords](./crosswords) folder.
4. Add the name of your crossword file to the **end** of the list in [data.json](./data.json).

## Deployment
To deploy to Netlify, simply commit to the remote repository. Upon commit, Netlify will run `yarn build && yarn export` and host the site using the outputted `out` folder.
