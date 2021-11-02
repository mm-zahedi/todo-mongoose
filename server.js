const express = require("express");
const bodyParser = require("body-parser");

//* Start Database Connection
require("./utils/database");
//* End Database Connection

// import routes
const adminRoute = require("./routes/admin");
const indexRoute = require("./routes/inedx");
// End Of import routes

// import Controllers
const errorController = require("./controller/error");
// End Of Controllers

const { setStarics } = require("./utils/statics");

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
// End of Middlewares

// EJS
app.set("view engine", "ejs");
app.set("views", "views");
// End Of EJS

// Statics
setStarics(app);
// End Of Statics

// Routes
app.use(indexRoute);
app.use("/admin", adminRoute);
app.use(errorController.get404); //  route 404
// End Of Routes

app.listen(3000, () => console.log("Running"));
