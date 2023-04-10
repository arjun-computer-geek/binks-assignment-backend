# binks-assignment-backend

This application has a basic jwt and cookied based authentication system and ability to update, edit and delete post and user details.

## Link
https://blinks-test.onrender.com

## Technology Stack
This project utilizes the following technologies:

* Express: A popular Node.js framework for building web applications.
* Bcrypt: A library used for hashing and salting passwords for secure storage in the database.
* Body-parser: A middleware that parses the request body in Node.js, making it easy to handle data sent from the client.
* Mongoose: A powerful object modeling tool for MongoDB, a NoSQL database, that simplifies working with data in Node.js.
* JsonWebToken (JWT): A library for creating and verifying JSON web tokens, commonly used for authentication and authorization in web applications.
* Validator: A library for validating and sanitizing user input data in Node.js, helping to prevent security vulnerabilities such as SQL injection and XSS attacks.

These technologies were used in the development of this project to ensure secure and efficient handling of data, authentication, and authorization, as well as smooth integration with the MongoDB database.





## How to Run on Local
### prerequisite
* nodejs installed
* yarn package manager

### Run following command
```
yarn install
```
#### To start development server
```
yarn run dev 
```
#### To start production server
```
yarn run prod 
```
Here you go!, Project is runnign locally

## Hosted on render.com

https://blinks-test.onrender.com
## Postman API
### User API
https://api.postman.com/collections/11797685-b2008ebb-7a84-448f-a6bb-4083236cff86?access_key=PMAT-01GXH5YS8129RX5V1B6ZDC152B
### Post API
https://api.postman.com/collections/11797685-a9adaba6-fc35-41ac-9ff1-a98dac5a5f98?access_key=PMAT-01GXH611H74H1BPFHRTC7P6T28
### Comment API
https://api.postman.com/collections/11797685-8b906d54-463e-4938-9c33-fa0939f6e3cc?access_key=PMAT-01GXH61ZZ9WJ2AVFS41KR32NJJ

## Conclusion
### How was my journey with this Project?
After completing my backend project in one day, I made some changes during frontend integration. I then spent an additional 2-3 hours trying to set cookies from a different origin, but realized that it wasn't possible. To overcome this, I decided to proxy the backend in the frontend. However, when I tried hosting the React app with the proxy on Netlify, it didn't work. Finally, I built the frontend and hosted it statically on the same location where the backend was hosted to ensure smooth functionality.
