# Movie Rating App

This is a small local application that uses MongoDB, Express and ReactJS to provide a simple movie search and rating functionality to keep track of your own movie ratings (and perhaps reviews in a future version). 

## Quick Start

``` bash
# Install dependencies for the server side
npm install

# Install dependencies for the client side
npm run client-install

# To run the two, write
npm run dev

# To run the Express server only, write
npm run server

# Run the React client only
npm run movie-rating

# The server runs on http://localhost:5000 and the client side on http://localhost:3000
```

## Configuration

The app uses the [OMDb API](https://www.omdbapi.com/) for all the search functionalities implemented. To use it, you will need an API key. Obtain one by registering an account and write down the API key in `Globals.js` (found within the `/movie-rating-app/` directory) and you're good to go.

## How to use

Use the search form in the header to search for a movie (e.g `John Wick` - you don't need to enter the full title). Clicking on the `Details` button will provide some base info about the movie. From there you can rate the movie. The rating gets stored in a database collection named `ratings` (which you can change in `/server/server.js` along with the database name and the connection string0).

The `Ratings` link from the app's navigation bar will redirect you to a page with all the movies you rated. You can change a rating from the movie details page as well. Alternatively, you can remove it by clicking on the `X` button.

Special thanks go to Brian Fritz for the [OMDb API](https://github.com/omdbapi) which this app uses.

## Author(s)

- Arman Ossi Loko

## License

> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.