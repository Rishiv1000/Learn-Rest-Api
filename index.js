require("dotenv").config();
const new_routes = require("./routes/products");

//.......................................//

const express = require('express');
const ejs = require('ejs')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const connectDB = require("./db/connect");

//........................................

const app = express();
const port = 3000;
app.use("/api/products" ,new_routes)
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(express.static("public"))
//.........................................

const My_Schema = {
        title : String,
        content :String
}
const Article = mongoose.model("article",My_Schema)

app.get('/articles',(req,res)=>{
    Article.find().then((data) => {
         res.send(data);
    }) 
})

app.post("/articles",(req,res)=>{
    const newArticle = new Article({
        title : req.body.title,
        content : req.body.content
    })
    newArticle.save();
})

//..............................................
const start = async ()=>{
    try{ 
        await connectDB(process.env.MONGODB_URL);
        app.listen(port ,()=>{ 
            console.log("I am connected");
        })
    }catch(err){
        console.log(err);
    }
}

start();