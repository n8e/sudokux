## To run:
1. Make sure you have `node` and `npm` installed
2. Run `npm install` to install the dependencies 
3. Run `npm start` to start the server
4. Head to `localhost:3000`

## Docker
Configuration added on `Dockerfile`.
1. Build Docker image: `docker build -t us.gcr.io/sudokux-186808/sudokux .`. Confirm build by checking if image is listed `docker images`.
2. Run the container `docker run -d --name sudoku -p 3000:3000 us.gcr.io/sudokux-186808/sudokux`


## Built wth:
* ES6 using [Babel](https://babeljs.io/) transpiler
* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [Lodash](https://lodash.com])
* [Webpack](https://webpack.github.io/)
