const express = require('express');
const app = express();
const pool = require('../db.js')
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get('/messages', (req, res) => {
    let query = 'SELECT * FROM "messages";'

    pool.query(query)
    .then((result) => {
        res.status(200).send(result.rows);
    })
    .catch((error)=> {
        console.error(error);
        res.sendStatus(500);
    });
});


app.post('/messages', (req, res) => {
    let messages = req.body;
    let query =
    `INSERT INTO "messages("title", "text")
    VALUES ('$1, $2, $3)
`
    
    pool.query(query, [messages.title, messages.text, messages.timestamp(Date.now())])
    .then(() => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.error(error);
        res.sendStatus(500);
    })});

app.listen(PORT, () => {
    console.log('App is listening on port:' , PORT)
})
