const express = require("express")
const path = require('path')
const app = express(); 
const PORT= 3001;
const fs = require("fs")

app.get("/notes",(req,res) => {
res.sendFile(path.join(__dirname,'Develop/public/notes.html'))
});

app.get("/*",(req,res) => {
    res.sendFile(path.join(__dirname,'Develop/public/index.html'))
    });


app.listen(PORT,()=>{
console.log(`server running on port ${PORT}`);
});