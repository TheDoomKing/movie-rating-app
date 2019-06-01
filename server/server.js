const express = require('express');
const mongodb = require('mongodb');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


app.use(bodyParser.json());
app.use(cors());

// GET api/ratings
app.get('/api/ratings', async (request, response) => {
    const ratings = await loadDB();
    response.status(200).send(await ratings.find({}).toArray());
});

// GET api/ratings/5
app.get('/api/ratings/:id', async (request, response) => {
    const ratings = await loadDB();
    response.status(200).send(await ratings.findOne({imdbID: request.params.id}));
});

// POST api/ratings
app.post('/api/ratings', async (request, response) => {
    const ratings = await loadDB();
    await ratings.insertOne({
        imdbID: request.body.imdbID,
        rating: request.body.rating,
        dateAdded: new Date()
    });
    response.status(201).send();
});

// PUT api/ratings/5
app.put('/api/ratings/:id', async (request, response) => {
    const ratings = await loadDB();
    await ratings.updateOne({
        imdbID: request.body.imdbID
    },
    {
        $set: 
        {
            "rating": request.body.rating,
            "dateAdded": request.body.dateAdded
        }
    });
    response.status(202).send();
});

// DELETE api/ratings/5
app.delete('/api/ratings/:id', async (request, response) => {
    const ratings = await loadDB();
    await ratings.deleteOne({
        imdbID: request.params.id
    });
    response.status(202).send();
});



async function loadDB() {
    const dbName = 'test';
    const collectionName = 'ratings';
    const username= 'yourusername';
    const password = 'yourpsasword';
    const uri = `mongodb+srv://${username}:${password}@projects-z1unv.mongodb.net/${dbName}?retryWrites=true&w=majority`;
    const client = await mongoClient.connect(uri, { useNewUrlParser: true });
    return client.db(dbName).collection(collectionName);
}


const PORT = 5000;
app.listen(PORT, () => console.log(`Server is now listening on port ${PORT}`));