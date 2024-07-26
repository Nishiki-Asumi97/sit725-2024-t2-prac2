const express = require('express');
const app = express();

//add two numbers
const addNumbers = (n1, n2) =>{
    return n1 + n2;
}

//multiply two numbers
const multiplyNumbers = (n1,n2) => {
    return n1 * n2;
}

//GET 
app.get("/add", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const add = addNumbers(n1, n2);
    res.json({statuscode: 200, data: add});
})
app.get("/multiply", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const multiply = multiplyNumbers(n1, n2);
    res.json({statuscode: 200, data: multiply});
})

const port = 3040;
app.listen(port, () => {
    console.log("Listening to the port "+port);
})

