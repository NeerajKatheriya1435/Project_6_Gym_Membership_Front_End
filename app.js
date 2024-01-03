const express = require("express")
const fs = require("fs")
const app = express();
const port = 80;
const path = require("path");
// Express specfic stuff
app.use("/static", express.static("static"));
app.use(express.urlencoded());

// Pug specific stuff
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.get("/", (req, res)=>{
   const con = "Kaise kahu ishq m tere kitna hu betab main"
   params={"title" : "This is my Neeraj title","content":con}
   res.status(200).render("index.pug", params)
})
app.post("/", (req, res)=>{
   // console.log(req.body)
   Name=req.body.Name
   Text= req.body.Text
   Email=req.body.Email
   More=req.body.More
   
   let outputfile = `My name is ${Name} Mera text hai ${Text} Meri Email hai ${Email} Aur mere bare m ${More}`;
   fs.writeFileSync("output.txt", outputfile);
   params={"Message":"Your form has succesfully submitted"}
   res.status(200).render("index.pug" ,params);
});
app.listen(port, () => {
   console.log(`This page started succesfully on port http:localhost:${port}`)
})