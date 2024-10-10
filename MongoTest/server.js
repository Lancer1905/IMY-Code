const express = require("express");
import "regenerator-runtime/runtime";
const { MongoClient } = require("mongodb");
const uri =
    "mongodb+srv://u23896257:JIOu1lZ7BIOZSQgn@cluster0.x8akr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

const app = express();
const http = require("http").Server(app);
http.use(express.static(__dirname));

http.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

async function runFindQuery(collection, query, options) {
    try {
        await client.connect();
        const database = client.db('TestDB');
        const col = database.collection(collection);
        const cursor = col.find(query, options);
        return await cursor.toArray();
    } finally {
        await client.close();
    }
}

const PORT = 3000;
http.listen(PORT, async () => {

    let results = await runFindQuery("Users",
        { "position": "student" },
        { "projection": { "name": 1 } }
    );

    console.log(`Listening on localhost:${PORT}`);

});