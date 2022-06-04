// const fs = require('fs');     //Vill vi kör fs.readFile för json-filen?
const express = require('express');
const app = express();
const PORT = 8000;
app.use(express.json())

const accountRouter = require('./routes/account')
app.use('/api/account', accountRouter)
const menuRouter = require('./routes/menu')
app.use('/api/events', menuRouter)

// const { createAccount } = require('./model/db');



// app.use(express.json());    gör om requests mot bodyn till JSON, så vi inte får buggen vid request.body;





app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});


