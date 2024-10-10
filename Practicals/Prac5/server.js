///u23896257 Pieter Venter
const { MongoClient } = require("mongodb");
const uri =
    "mongodb+srv://u23896257:JIOu1lZ7BIOZSQgn@cluster0.x8akr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function fetchDBQuery(){
    try {
        await client.connect();
        const db = client.db('Practical5');
        const col = db.collection('events');
    
        const project = {"name":1, "description":1, "_id":0};

        const query = {
            "locations": {
                "$all": [
                    { "area": "Brooklyn" },
                    { "capacity": { "$gt": 20 } },
                    {
                        "$and": [
                            { "date": { "$gt": "2022/10/08" } },
                            { "date": { "$lt": "2022/10/26" } }
                        ]
                    }
                ]
            }
        };

        const results = await col.find(query).project(project).toArray();

        console.log(results);
    }   
    finally {
        await client.close();
    }
}

fetchDBQuery().catch(console.error);