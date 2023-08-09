const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/create", (req, res) => {
  const DOWNLOAD_DIR = path.join(
    process.env.HOME || process.env.USERPROFILE,
    "downloads/"
  );
  var file_path = path.join(DOWNLOAD_DIR, "index.html");
  console.log(file_path);

  const data = req.body;
  fs.writeFile(file_path, data.template, (err) => {
    if (err) throw new Error(err);
    else {
      res.download(file_path);
    }
  });
});

app.listen(5000, () => {
  console.log("Listening on port 5000!");
});
