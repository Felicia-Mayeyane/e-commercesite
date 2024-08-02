# e-commercesite
<p> An Ecommerce site that displays products available in the database and enables uses to create, read, update and delete products. For security the user has to be loggedin to make an order also upon refresh sessions are not removed.</p>

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, React,  NodeJs, PassportJs, ExpressJS and MongoDB

**Desgin Architecture:** MVC

**Database and APIs:** In this App I tried using seedDatabase which I was intending on fetching as productlist and working with just that database in the App. I reality it would have easier if I had just just external api's like i did <a href= "https://github.com/Felicia-Mayeyane/PantryPal-App"> Here </a> I encountered problems with the database not being populated as intended.

**Configurations:** I used environment variables to house ID and secrets using doenv file - This file include port, mongo_uri, googleID, googleSecrets,  and sessionSecret.
config file including node_modules will be added to **gitignore**


**Database Lesson Learned:** In this case using Cloudinary to store  images instead of mongodb would have been a better choice.

## Optimizations

Sticking with simplicity while building this site would have sufficed, using a framework and a seedDatabase was probably not the best decisions. I encountered issues with react libraries that I had intended to use for state management (react-redux), troubleshooting introduced more complexities to the site which lead me into one rabbit hole after another until I opted for using context (fun times🥶). I intended to scratch out the seedDatabase entirely and work with existing Apis and use pure Javascript to build this again.

## Lessons Learned:

Documentation is king! This still rings true. I am working on improving the application and working on bugs that don't seem to go away this has made me lean more towards TDD using Jest to fall into the habit of testing as i develop whenever the need arises. 
