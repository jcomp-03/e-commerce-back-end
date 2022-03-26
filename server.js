
// WHEN I test API POST, PUT, and DELETE routes in Insomnia
// THEN I am able to successfully create, update, and delete data in my database

const express = require('express'); // load 3rd-party module Express located in 'node_modules' folder
const routes = require('./routes'); // import routes

// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync( { force: false } ).then( () => {
  app.listen(PORT, () => {
    console.log(`********** Sequelize models synced to database. The app is listening on port ${PORT}! **********`);
  });
});

