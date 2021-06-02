const express = require("express");
const { json, urlencoded } = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const { response } = require("express");
const vans = require('./src/vans/vans.routes');
const users = require('./src/users/users.routes')

const mongoose = require("mongoose");

const options = { useNewUrlParser: true, useUnifiedTopology: true };
const mongo = mongoose.connect(
  "mongodb://masteradmin:BookerDeWitt69!@localhost:27017",
  options
);

global.appRoot = path.resolve(__dirname);

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));
app.disable("x-powered-by");

app.use('/vans', vans); // Aquí le decimos que todo lo relacionado con vans, irá en /vans
app.use('/users', users);


const start = async () => {
    try {
    app.listen(5000, () => {
      console.log(`REST API on http://localhost:5000/`);
    });
  } catch (e) {
    console.error(e);
  }
};
start();