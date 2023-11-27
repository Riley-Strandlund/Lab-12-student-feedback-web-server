const express = require('express') //imports express library and gives it appropriate name
const path = require('path') //path is used to connect locations of files to figure out where files are
const bodyParser = require('body-parser') // this isn't require when using the GET request.


const indexRouter = require('./routes/index.js')//pretty sure the dot has it look at files/folders on the same level as it. As in not nested in a folder or nested at the same level.

const app = express() //creates the web app server

//enable parsing of POST request body
app.use(bodyParser.urlencoded({ extended: false }))


const staticFileLocation = path.join(__dirname, 'public')//this line says that all static files are in public folder
app.use(express.static(staticFileLocation))//Tells express where static files are whether they are images css or javascript

//tell app where the views (HTML files or templates) are.
app.set('views', path.join(__dirname, 'views')) //__dirname is the current location of a file to which a folder name is assigned to it. In this case 'views' is being assigned to __dirname
app.set('view engine', 'hbs') //use handlebars to generate views

app.use('/', indexRouter) //all requests to app are passed through index router has the code to receive request and generate response

//start server running
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port', server.address().port)
}) //Use port that you are told to use or use 3000
// the server const listens to activity on port 3000

