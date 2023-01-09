const express = require("express")
const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes =require("./routes/htmlRoutes")
const app = express(); 
const PORT= 3001;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use("/api",apiRoutes)
app.use("/",htmlRoutes)


app.listen(PORT,()=>{
console.log(`server running on port ${PORT}`);
});