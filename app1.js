const express = require("express")
const app = express();
const port = 80;
const path = require("path");

app.use("/static", express.static("static"));

app.set("view engine", "pug");
// app.set("views", path.join(__dirname, "views"));

app.get("/demo" ,(req,res)=>{
   res.status(200).render('demo', { title: "Hey Neeraj", message: "Hello bhai this is i dont know" });
 })

app.get("/", (req, res) => {
   res.status(202).end("This is My home page");
})
app.get("/about", (req, res) => {
   res.end("This is My about page");
})
app.post("/nest", (req, res) => {
   res.status(404).end("This is My nest post page")
})

app.listen(port, () => {
   console.log(`This page started succesfully on port ${port}`)
})