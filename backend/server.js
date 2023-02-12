const express = require("express");
const app = express();
const port = 5000;

//
// GET http://localhost:3000/download/mk1.zip
//
app.get("brogill.com/download/:filename", (req, res) => {
  const filePath = __dirname + "/stlfolders/" + req.params.filename;
  res.download(
    filePath,
    "mk1.zip", // Remember to include file extension
    (err) => {
      if (err) {
        res.send({
          error: err,
          msg: "Problem downloading the file",
        });
      }
    }
  );
});

//
// GET http://localhost:3000/download/mk2.zip
//
app.get("brogill.com/download/:filename", (req, res) => {
  const filePath = __dirname + "/stlfolders/" + req.params.filename;
  res.download(
    filePath,
    "mk2.zip", // Remember to include file extension
    (err) => {
      if (err) {
        res.send({
          error: err,
          msg: "Problem downloading the file",
        });
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
