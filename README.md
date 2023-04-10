# binks-assignment-backend

This application has a basic jwt and cookied based authentication system and ability to update, edit and delete post and user details.

## Link
https://blinks-test.onrender.com

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
* Done entire project in one day but there were a bit changes what i done during frontend integration.
* 2-3 hrs spent after completed project for hosting and connecting to forntend.
* spending 3-4 hrs I realise that we can't set cookie from other origin then i proxy the backend in frontend.
* When I proxied the react app then it was not supporting by netlify. So finally i made build of that frontend and hosted statically on same location where backend had.
