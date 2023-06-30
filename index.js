const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ApiRoutes =  require("./src/routes/routes")
require("dotenv").config();


const PORT = process.env.PORT;

console.log("<<<<<<<-----------Backend Started----------->>>>>>>>>");

const app = express();
app.use(cors());

// to accept data in json formate and urlencoded formate
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set default indian local time
process.env.TZ = process.env.TIME_ZONE;


// to initiate routes
app.use("/api", ApiRoutes);

app.listen(PORT, () => {
	console.log(`Server Started At Port---------->>>>>>>${PORT}`);
});
