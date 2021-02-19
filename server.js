const express = require("express")
const  cors = require('cors')
const bodyparser = require("body-parser") 
const mongoose = require("mongoose")
const path = require('path')
const Itemroutes=require('./routes/Itemroutes')
const billroutes=require('./routes/billroutes')

const app = express()
const router=express.Router()
const session = require("express-session")
//app.use(express.urlencoded());
//var urlencodedParser = bodyparser.urlencoded({ extended: false })  

mongoose.connect(
    'mongodb+srv://reddymallesundeep:reddymallesundeep@cluster0.n1phn.mongodb.net/x-store?retryWrites=true&w=majority'
  , function(err,db){
    if (err) throw(err);
});


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//app.use(session({ secret: 'keyboard cat'}))
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'views'))
app.set('view engine','hbs')
app.use(cors())

app.use("/items", Itemroutes)
app.use("/bills", billroutes)

app.get("/",(req,res)=> {

    res.send("hello world")
})
app.post("/",(req,res)=> {
    console.log("in post")

    console.log(req.body)
    res.send("hello world")
})

app.listen(5000)