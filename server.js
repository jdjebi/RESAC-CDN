const express = require("express");
const app = express();
const router = require("./router").router;

app.use("/", express.static("static"));

app.set("views", __dirname + "/views");

// Test server available
app.use("/cdn", router);

// 404 page
app.use((req, res) => {
  res.status(404).render("404.ejs");
});


const PORT = process.env.PORT || 3800;

app.listen(PORT);

