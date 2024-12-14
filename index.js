import express from "express";
import bodyParser from "body-parser";
import qr from "qr-image";
import fs from "fs";
let URL = " ";
let d = " ";
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));




  app.get("/", (req, res) => {
    res.render("index.ejs");

  });

  app.get("/About", (req, res) => {
    res.render("about.ejs");

  });

  app.post("/submit", (req, res) => {

    URL = req.body.url;
    var qr_svg = qr.image(URL);
    qr_svg.pipe(fs.createWriteStream('public/images/qr-image.png'));
    res.render("index.ejs", {url: URL});
  
  });

  app.post("/", (req, res) => {
    res.render("index.ejs");
  });

  

  app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });
  