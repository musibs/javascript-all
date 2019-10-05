const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

const members = require('./members');

// app.get('/', (req, res) => {
//     //res.send("<h1>Hello from Express</h1>");
//     //res.json({message : 'Hello from Express'});
//     //res.sendFile(path.join(__dirname, "public", "index.html"));
// });


const logger = (req, res, next) => {
    console.log(`${req.protocol}`)
    next();
}

app.use(logger);


app.get('/multiroute', (req, res, next) => {
    console.log(`This request will be handled by next middleware`);
    next();
}, (req, res) => {
    res.send(`Hello from second function`);
} )


app.get('/api/members', (req, res) => {
    res.json(members);
})

app.get('/', (req, res) => res.send(`Got a GET request`));
app.post('/user', (req, res) => res.send(`Got a POST request at /user`));
app.put('/user', (req, res) => res.send(`Got a PUT request at /user`));
app.delete('/', (req, res) => res.send(`Got a DELER request`));


app.use(express.static(path.join(__dirname, "public")));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));