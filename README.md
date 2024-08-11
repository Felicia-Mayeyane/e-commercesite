# Anaya E-commercesite
<p> An Ecommerce site that displays products available in the database accesssbile to the customer. For security the customer has to be loggedin to make an order/ view their cart also upon refresh sessions are not removed. Verified Admins are the only one's that can add, delete, update products- The admin is also able to calculate their monthly income and general stats of the site. The customer can safely make their onlice payment through stripe</p>

## How It's Made:

**Tech used:** JavaScript, React, NodeJs, ExpressJS and MongoDB

**Payment Method:** Stripe

**Security:** JWT

**Testing APIs:** Postman

**Desgin Architecture:** MVC

**Configurations:** I used environment variables to house ID and secrets using doenv file - This file include port, mongo_uri, stripe keys etc.
config file including node_modules will be added to **gitignore**

**NPM used:** <i>See Package.json </i>

**The big idea** something similar to this just with a robust backend <a href= "https://github.com/Felicia-Mayeyane/PantryPal-App"> Here </a>

1. Prioritize security to secure users login details- I used password hashing (for general users). Ensuriing CRUD privileges to admins are not accessible to customers through verified tokens.

2. User, products, orders and cart information securely stored in relevant database

3. Secure payment routes to keep track of user types,added ability for admin to track monthly income.

4. Filter products and keep products in cart

   ## UI:
   
   **NPM used:** <i>See Package.json </i>
   

## Optimizations

Working on optimizing the UI -I encountered challenges with the UI and landed on the decision to prioritize backend functionality and only back track to the UI oonce I have established basic functionality of the site(fun times🥶). I intend on working on the frontend design- it is doable and less tedious now, as the backend has helped me put things into perspective first.

## Lessons Learned:

Code doesn't always cooperate with whats in your head! And separation of concerns is king as far as readability and maintainability is concerned,  however in this case I separated my concerns a little too deep into the workflow.  I lost track of the vital pieces of my UI and ended up aborting mission in order to rebuild the skeleton (backend) IK IK I can explain! 😆 My biggest challenge with this project was working with react hooks I've never used before, it did not pan out as expected, logically it seemed like a good idea.



## Backend Snippets :

Postman: Using CRUD to populate mongodb database/ change data in the database


<img width="1436" alt="Screenshot 2024-08-11 at 18 05 23" src="https://github.com/user-attachments/assets/824cbd20-8eae-4983-8356-bb8c2316516b">


**MongoDB Snippet**






