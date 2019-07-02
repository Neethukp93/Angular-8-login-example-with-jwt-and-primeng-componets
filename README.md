# Angular-8-login-example-with-jwt,primeng-componets-and-Jest-configuration

This application helps you to understand the login using jwt, but you have to set the backend api for running this application.

please refer this link to create a real backend api using Nodejs :
https://jasonwatmore.com/post/2018/06/14/nodejs-mongodb-simple-api-for-authentication-registration-and-user-management
after completing the setup of Nodejs, first you need to register one user using the api:
localhost:4000/users/register
you can use postman for calling this api and create one user :

- create a post request in postman using the above url
- choose Body-> select x-www-form-urlencoded
- Add the following data as key-value pair

        key                     value

        username                John2019
        password                John@123
        firstName               John
        lastName                Smith

- send the data with api you will get response.

- run the angular application try login with the credentials.

Moreover, I have done Jest configuration preset for this Angular application.
