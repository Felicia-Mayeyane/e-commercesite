# e-commercesite

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, React,  NodeJs, PassportJs, ExpressJS and MongoDB
**Desgin Architecture** MVC

**Database and APIs** In this App I tried using seedDatabase which I was intending on fetching as productlist and working with just that database in the App. I reality it would have easier if I had just just external api's like i did <a href= "https://github.com/Felicia-Mayeyane/PantryPal-App"> Here </a> I encountered problems with the database not being populated as intended.

**Database Lesson Learned ** In this case using Cloudinary to store  images instead of mongodb would have been a better choice.

## Optimizations

Security and making changes to the interface. The application will move to a cloud based storage in order to be store video content from the application, at this time all video recording done on the app can be dowloaded to the users machine however cannot be stored in the current database, this is due to the size of video content.



## Lessons Learned:

Documentation is king! This still rings true. I am working on improving the application and working on bugs that don't seem to go away this has made me lean more towards TDD using Jest to fall into the habit of testing as i develop whenever the need arises. 
