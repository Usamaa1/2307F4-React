
import { MongoClient, ServerApiVersion } from 'mongodb';
import 'dotenv/config'

// const uri = "mongodb+srv://admin:admin@cluster1.gehbwwq.mongodb.net/?appName=Cluster1";
const uri = process.env.MONGO_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



export const db = client.db('firstDB')


export async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch(e) {
    // Ensures that the client will close when you finish/error
    console.log("Your connection is closed")
    console.log(e)
    await client.close();
  }
}
run();
