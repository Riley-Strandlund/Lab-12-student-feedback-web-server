//routes decide which web page, template, file to load.

const express = require('express')
const router = express.Router() // figures out what code to run in response to a request 
// typically based on the URL, and the method, GET, POST, ...

// the shortened version is like that on the Express documentation req = request res = response
// responds to get request to home page
router.get('/', function(req, res, next) {
    // name of Handlebars file - name of a template, optional object with data for the template
    res.render('index', { 
        title: 'Feedback Application',
        author: 'Riley',
        timePageLoadedAt: new Date()
    })
}) // 'GET' request to the home page. 'next' is used for passing the request onto something else that the function can't handle because of wrong information or something
// The index above "res.render('index', ..." refers to the index.hbs file in views not this file. Confusing.
//The above router.get function has inside a bunch of different data that can be pulled for use in index.hbs



router.get('/feedback-form', function(req, res, next) {
    res.render('student_feedback_form')
})//...get('/url', function()) you decide the url name yourself so name it whatever. Its called a route handler.



router.post('/submit-feedback', function(req, res, next) {
    // get feedback-form data
    //const formData = req.query // for a GET request - read the URL query
    const formData = req.body // for a POST request 
    console.log(formData)

    //todo - save to a database
    //automatically email someone when feedback is submitted.

    res.render('thank_you', { 
        name: formData.name,
        email: formData.email,
        comments: formData.comments,
        currentStudent: formData.Answer
    })
})// 'router.get()' is specifically meant for GET requests.


// This all decides which template/HTML page to use

module.exports = router //This line is required to be the very last line