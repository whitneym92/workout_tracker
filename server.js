const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan"); 

const apiRoutes = require("./routes/api.js");
const htmlRoutes = require("./routes/html.js");

const PORT = process.env.PORT || 3000;

const app = express();
const db = require("./models");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(htmlRoutes);
app.use("/api", apiRoutes);

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/fitness',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});