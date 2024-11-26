const express = require("express");
const Router = express.Router();
const {handleAllData} = require("../controller/allData");
Router.get("/",handleAllData);

module.exports = Router;
