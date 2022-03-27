[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  # wk13-e-commerce-back-end
  ## Project Description
  This app incorporates Express, a minimalist and flexible Node.js web application framework for establishing a simple and robust API that is configured to use Sequelize, a promise-based Node.js object-relational mapper (ORM) to interact with and accomplish CRUD procedures (i.e. CREATE, READ, UPDATE, & DELETE) on a MySQL database.
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribute](#contributions)
  * [Tests](#tests)
  * [Questions?](#questions)
  ## Installation
  After cloning or downloading a local copy of the repository, from a terminal install the required dependencies that are listed in the package.json file:
  ```
  npm install
  ```
  Once the node_modules folder is created and all dependencies are downloaded, type the following in your terminal:
  
  ```
  npm watch
  ```
  The *watch* command effectively runs "nodemon server.js," which will restart the server.js file every time nodemon observes a change in code. After starting the server, open mysql shell, log in with appropriate credentials, and run:
  ```
  source db/schema.sql
  ```
  This will drop the database if it exists previously and recreate it. The next step is to seed the database with information. Exit out of mysql shell, and in your terminal run:
  ```
  npm seed
  ```
  This command should successfully populate all the tables with rows that you can now make HTTP queries on.
    
  ## Usage
Please visit the two Google drive links below for a walkthrough of the functionality of the code. The first link demonstrates successful HTTP requests for products and categories. The second link is for tags.

https://drive.google.com/file/d/1I-WCek5ZeXnHh8CnrxLBfd12wbZdFg6R/view

https://drive.google.com/file/d/1c4iYuPI2eZNxL5nkIMUpg7xH4BII2T2A/view

  ## License
  <p align="center">Copyright 2022</p>
    <p align="center">=======================================</p><br>
    <details>
    <summary>Click for the legal stuff, if that's <em><strong>your thing</strong></em></summary>
    Copyright <YEAR> James Compagnoni

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
    </details>
  Legalese borrowed from <a href="https://opensource.org/licenses/MIT" target="_blank">here</a>.

  ## Contribute
  Please contact me for ways I can improve this app.

  ## Tests
  n/a

  ## Questions?
  I enjoy hearing back about my work. You can reach me at jcomp_03@yahoo.com.
  Alternatively, contact me on my GitHub page <a href="https://github.com/jcomp-03">here</a>.
  
