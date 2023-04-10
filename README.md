# binks-assignment-backend

This application is a social media app that includes a basic authentication system using JSON Web Tokens (JWT) and cookies for secure user authentication and authorization. Users can register, log in, and log out securely with their credentials, and their authentication status is maintained using JWT and cookies.

The app also provides functionality for users to create, update, and delete their posts, as well as edit their user details. Posts can be created with formatted text using a rich text editor, and users can also like and comment on posts made by other users.

The authentication system implemented in this app allows for secure and seamless user experience, ensuring that only authenticated users can perform actions such as creating, editing, and deleting posts and user details. The use of JWT and cookies provides a reliable and efficient way to manage user authentication and authorization in the application, while also ensuring data integrity and security.

## Link
https://blinks-test.onrender.com

### Frontend Repo
https://github.com/arjun-computer-geek/binks-assignment-frontend.git

## Technology Stack
This project utilizes the following technologies:

* Express: A popular Node.js framework for building web applications.
* Bcrypt: A library used for hashing and salting passwords for secure storage in the database.
* Body-parser: A middleware that parses the request body in Node.js, making it easy to handle data sent from the client.
* Mongoose: A powerful object modeling tool for MongoDB, a NoSQL database, that simplifies working with data in Node.js.
* JsonWebToken (JWT): A library for creating and verifying JSON web tokens, commonly used for authentication and authorization in web applications.
* Validator: A library for validating and sanitizing user input data in Node.js, helping to prevent security vulnerabilities such as SQL injection and XSS attacks.

These technologies were used in the development of this project to ensure secure and efficient handling of data, authentication, and authorization, as well as smooth integration with the MongoDB database.





## How to run the Application Locally
### Prerequisites:
* Node.js installed on your local machine
* Yarn package manager installed on your local machine

### Follow these steps to run the application locally:

### Run following command
* Install Dependencies: Open your terminal and navigate to the project directory. Run the following command to install the project dependencies using Yarn:
```
yarn install
```
* Start Development Server: After the dependencies are installed, run the following command to start the development server:
```
yarn run dev 
```
This will launch the application in development mode, and you can access it in your web browser at the 8000 port of localhost.

* Start Production Server: If you want to run the application in production mode, you can use the following command:
```
yarn run prod 
```
This will run the application for production setting (e.g: change response messages).

By following these steps, you will be able to run the application locally on your machine.

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
