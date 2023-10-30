
const mysql = require('mysql2');
const express =require("express");
const app=express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());



const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'ssss',
        database: 'movie_db'
      },
      console.log('connection success!')
);



app.get("/api/movies",(req,res)=>{
db.query(`Select * FROM movies`,(err,result)=>{
    if(err){
        console.err("Error connection to database" + err)
      
    }else{
        res.json(result);
    }


})})

app.get("/api/movies-review",(req,res)=>{
db.query("SELECT * FROM reviews",(err,result)=>{
    if(err){
        console.err(err)
    }
    else{
        res.json(result)
    }
})
})

app.post("/api/add-movie",(req,res)=>{
    const {title}=req.body;
    db.query(`INSERT INTO movies (movie_name)VALUES(${title})`,(err)=>{
        if(err){
        console.log("Insert movie title")
        }
        else{
            res.json({"message":"the movie added success"})
        }
    })
})
app.put("/api/review/:id",(req,res)=>{
    const {title,id}=req.body;
    db.query(`INSERT INTO reviews (review,movie_id)VALUES(${title},${id})`,(err)=>{
        if(err){
        console.log("reviews error")
        }
        else{
            res.json({"message":"the review added success"})
        }
    })

})

app.delete("/api/movie/:id",(req,res)=>{
    const{id}=req.params;
    db.query(`DELETE FROM movies WHERE id=${id}`,(err)=>{
        if(err){
            console.err("Error deleting from the database "+ err)
            res.status(500).json({error:"An error occurred"})

        }
        else{
            res.json({message:"Movie deleted successfully"})
        }
    })
})