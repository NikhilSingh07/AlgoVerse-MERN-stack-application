const express = require('express');
const bodyParser  = require('body-parser');   
const app = express();
const port = 3000;


const USERS = [{name: 'Nikhil', password: '123'},
               {name: 'Andrew', password: 'abcd'}
              ];

const QUESTIONS = [{
    title: "Two states",
    description: "Given an array , return the maximum of the array?",
    testCases: [{
        input: "[1,2,3,4,5]",
        output: "5"
    }, {
        input: "[6,8,5,8,0,2]",
        output: "56"
    }]
}];


const SUBMISSION = [];

app.use(bodyParser.urlencoded({extended: true}));  // middleware function used to parse URL-encoded data from HTTP request body.



  // Add logic to decode body
  // body should have email and password
  //Store email and password (as is for now) in the USERS array above (only if the user with the given email doesnt exist)
  // return back 200 status code to the client

app.post('/signup', function(req, res) {

  console.log('Got body:', req.body);
  const {email, password} = req.body;

  const emailExists = USERS.some( (user) => { return user.email === email }); // some method executes a callback function on each element of the array
  // unti the callback function return true or all the elements have been iterated.

  if(emailExists) {
    console.log('Email already exists');
  } else {
    USERS.push({email, password});  // append the object inside the USERS array.
  }

  
  res.sendStatus(200);
  //res.send('Hello World from signup page');
})



  // Add logic to decode body
  // body should have email and password

  // Check if the user with the given email exists in the USERS array
  // Also ensure that the password is the same

  // If the password is the same, return back 200 status code to the client
  // Also send back a token (any random string will do for now)
  // If the password is not the same, return back 401 status code to the client

app.post('/login', (req, res) => {   // route
  res.send('Hello World from login route')
})


app.get('/questions', (req, res) => {

    res.send('Hello World from questions route')
})



app.get('/submissions', (req, res) => {

    res.send('Hello World from submissions route')
}) 

app.listen(port, () => {   // starts the HTTP server
  console.log(`Example app listening on port ${port}`)
})

