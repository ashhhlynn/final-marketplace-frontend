# Seedlink 

## Description
  
A buy and sell ecommerce application for plants created with a Redux & React JavaScript frontend and a Rails API backend. Users can sell or purchase plants from other users by adding items to a shopping cart and submitting orders at checkout. Styled with Semantic UI React and CSS. 
  
## Functionality

- Users can create accounts and sign in, authenticated and authorized through BCrpyt, stored through JWT.

- Users can view products and sort by price & alphabetical order.

- Users can add and remove items from a shopping cart. 

- Users can add and remove items at checkout.

- Users can edit their Account information from both their user profile and checkout.

- Users can edit and delete Product information for the products they created. 

- Users can view history of their orders and created products marked as active and sold.

## Tech Stack

- Ruby 
- Rails
- React
- Redux
- Semantic UI React
- HTML & CSS
- PostgresQL - Database
- Bcrypt and JWT for authentication and authorization
- rack-cors - provides support for Cross-Origin Resource Sharing for Rack compatible web applications(allows the front-end portion of this project to perform fetch requests)
- active_model_serializers - allows customization and rendering of data in JSON format as responses to requests
- React Router

## Instructions

- clone the backend repo:  https://github.com/ashhhlynn/final-marketplace-backend to your local environment -- git clone < git repository >
- run $bundle install - installs gems and dependencies
- run $rails db:create - creates the database for the first time, or try $rails db:reset
- run $rails db:migrate - creates the tables for the database
- run $rails db:seed - seed the data necessary
- run rails s to start the server
- clone this repo to your local environment -- git clone < git repository >
- cd(change directory) into the repo
- run $'npm install' into your command line
- run $'npm start' into your command line

