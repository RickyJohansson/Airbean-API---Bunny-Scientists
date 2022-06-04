 // const fs = require('fs');     //Vill vi kör fs.readFile för json-filen?
const express = require('express');
const app = express();
const PORT = 8000;



// const { createAccount } = require('./model/db');



// app.use(express.json());    gör om requests mot bodyn till JSON, så vi inte får buggen vid request.body;





app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});


