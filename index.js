const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server successfully running on port 8080");
});
