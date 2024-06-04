
<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Store app </h3>

  <p align="center">
    Order right now!
    <br />
   
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
         <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#acknowledgments">Acknoledgments</a></li>
    
    
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

A store application where you can buy the groceries you need. 


* Home page: a page with all the products cards. You can add to cart (or change the quantity of how many you want in the cart) or add the product to favorites. It also has a header where there is a search bar to get the wanted grocery. There are also buttons to go to the favorite page, profile page, log out or the cart page

* Favorites page: a page where you can see all the products you liked or you can erase some if you don't like them anymore. If there are no products added, a message will be displayed "No product added to favorite list :("

* Cart page: a page where you can see all the products you added to your cart and the summary of your total (number of products, total price, price for delivery, fees). The price for delivery depends on how much you are spending. You can also modify the number of products from this page or delete them completely from the cart. You can also empty the whole cart or print it to have your shopping list. You can also find a delivery part here where you can click and fill in your address that will be shown in the cart page (just the first line, not the full address)

* Login and SignUp Page: the users are stored in a sqlite database. All the modifications are done with the help of the typescript backend such as creating the database, populating it. 

The products are also stored in a table with sqlite and all the API calls are done in the server.ts file from the ![backend](https://github.com/AndraCristiana07/Store-app-backend)


### Built With

These are what I used to build the bot:

* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
 
*  ![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
    
*  ![CSS3](https://img.shields.io/badge/CSS%20-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
*  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)


<!-- GETTING STARTED -->
## Getting Started

To be able to use this project you will need some stuff first.

### Prerequisites

* You need to install npm and node.js


### Installation

If you want to make your own app like this you need to:

1. Clone the repos
   ```sh
   git clone https://github.com/AndraCristiana07/Store-app.git
   git clone https://github.com/AndraCristiana07/Store-app-backend.git
   ```
2. Install dependencies
   ```sh
   npm install
   ```
3. Run the frontend
   ```sh
   npm run start
   ```
4. Run the backend
    ```sh
   npm  start
   ```


<!-- ROADMAP -->
## Roadmap

- [x] Make home page
- [x] Make some mock data for testing
- [x] Make cart page
- [x] Make Log In/ Sign In pages
- [x] Make favorites page
- [x] Use navigation
- [x] Make products cards
- [x] Implement functionalities to "add to cart" and add to favorites
- [x] Make cart summary
- [x] Make pages for all "types" of products
- [x] Make "add to cart" transform into change quantity after it's added to cart and go back when the item reaches 0 quantity again
- [x] Make search bar
- [ ] Implement search
- [ ] Implement Login/ SignUp
- [ ] store data in a database 





<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Some things that helped me while making this project :
* [Angular doc](https://angular.io/)
* [Angular material](https://material.angular.io/)

