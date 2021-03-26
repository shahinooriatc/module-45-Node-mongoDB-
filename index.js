const express = require('express');
const cors = require('cors');//Enable All CORS Requests

const app = express();
const port = 3000;//Opening Port for Projects.

app.use(cors());//Use All CORS Requests in App..
app.use(express.json())
const users = ['zero', 'ek', 'dui', 'tin', 'car', 'pach', 'choy', 'shat', 'att', 'noy', 'dosh', 'egaru', 'baro'];

// read data from Browsers url...
app.get('/', (req, res) => {
    res.send(users)
})

// read data from Browsers url...dynamic id...
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const name = users[id];
    res.send({ id, name });
})


//Post section.....
app.post('/addUser', (req, res) => {
    const user = req.body;
    user.id = 1201;
    res.send(req.body);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})