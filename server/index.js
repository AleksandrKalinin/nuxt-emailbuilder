const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");
const { v4: uuidv4 } = require("uuid");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));

const link =
  "https://images.unsplash.com/photo-1682687221248-3116ba6ab483?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80";

app.post("/create", (req, res) => {
  const DOWNLOAD_DIR = path.join(
    process.env.HOME || process.env.USERPROFILE,
    "downloads/"
  );
  const filename = `${uuidv4()}.html`;
  var file_path = path.join(DOWNLOAD_DIR, filename);

  const data = req.body;
  fs.writeFile(file_path, data.template, (err) => {
    if (err) throw new Error(err);
    else {
      res.download(file_path);
    }
  });
});

app.post("/download", (req, res) => {
  const DOWNLOAD_DIR = path.join(
    process.env.HOME || process.env.USERPROFILE,
    "downloads/"
  );
  const filename = `${uuidv4()}.js`;
  var file_path = path.join(DOWNLOAD_DIR, filename);

  const data = JSON.stringify(req.body.template);

  fs.writeFile(file_path, data, (err) => {
    if (err) throw new Error(err);
    else {
      res.download(file_path);
    }
  });
});

app.post("/image", (req, res) => {
  const DOWNLOAD_DIR = path.join(
    process.env.HOME || process.env.USERPROFILE,
    "downloads/"
  );
  const filename = `${uuidv4()}.png`;
  var file_path = path.join(DOWNLOAD_DIR, filename);

  const data = req.body.image.replace(/^data:image\/\w+;base64,/, "");
  const buf = Buffer.from(data, "base64");

  fs.writeFile(file_path, buf, (err) => {
    if (err) throw new Error(err);
    else {
      res.download(file_path);
    }
  });
});

app.post("/send", (req, res) => {
  sendMail(req.body.email, req.body.template, req.body.filepath);
});

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "1995kalininaleksandr@gmail.com",
    pass: "ltgreftivxgjqfqq",
  },
});

async function sendMail(email, template, filepath) {
  const info = await transporter.sendMail({
    from: "1995kalininaleksandr@gmail.com",
    to: email,
    subject: "E-mail template",
    text: "Your template",
    attachments: [
      {
        filename: "template.html",
        path: filepath,
        filePath: filepath,
        contentType: "text/html; charset=UTF-8",
      },
    ],
  });
}

app.listen(5000, () => {
  console.log("Listening on port 5000!");
});
