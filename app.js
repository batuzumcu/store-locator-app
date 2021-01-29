const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

//static folder (to put images etc.)
app.use(express.static(`${__dirname}/public`));

app.get("/public/index.html", function (req, res) {
  res.header("Content-Type", "text/html").send("<html>my html code</html>");
});

// homepage route
app.get("/", (req, res) => {
  res.render("index", {});
});
