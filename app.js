require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const expressLayouts = require("express-ejs-layouts")

const app = express()
const PORT = process.env.PORT || 3000

//middleware
app.use(morgan('dev')) //logger
app.use(expressLayouts) //templating engine layout
app.use(express.static('public'));


// set up view engine
app.set('view engine', 'ejs')
app.set('layout', './layouts/main')

//routes
const indexRoutes = require('./server/routes/index')

app.use('/', indexRoutes)
//start server
app.listen(PORT, ()=>{
  console.log(`app is listening on PORT ${PORT}`)
})