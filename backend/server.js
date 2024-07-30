const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000; //port no. is 5000

app.use(express.json());

const server = app.listen(PORT, console.log(`Server started at port ${PORT}`));