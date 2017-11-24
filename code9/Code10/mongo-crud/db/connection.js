const mongoose = require("mongoose");
const configObject = require("./config");
mongoose.connect(configObject.dbURL);
module.exports = mongoose;
