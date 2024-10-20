const express = require('express')
const bodyParser = require('body-parser')
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mostafiz:iit123@cluster0.70bie.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const ObjectId = require('mongodb').ObjectId


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const productCollection = client.db('organicdb').collection('products')

    // app.get('/products', async(req, res) => {
    //  try{
    //   productCollection.find({})
    //   .toArray((err, documents) => {
    //     res.send(documents)
    //   })
    //  }
    //  finally{
      
    //  }
    // })

    app.get('/products', async (req, res) => {
      try {
        const products = await productCollection.find({}).toArray();
        res.send(products);
      } catch (err) {
        console.error("Error fetching products:", err);
        res.status(500).send({ error: "Failed to fetch products" });
      }
    });

    app.post('/addProduct', (req, res) => {
      const product = req.body
      productCollection.insertOne(product)
      .then(result => {
        console.log("Data added successfully")
        res.send('success')
      })
      .catch(err => {
        console.error("Failed to add product:", err);
        res.status(500).send({ error: "Failed to add product" });
      });
    })

    app.delete('/delete/:id', (req, res) => {
      productCollection.deleteOne({_id: new ObjectId(req.params.id)})
      .then((result) =>{
        if (result.deletedCount === 0) {
          return res.status(404).send({ error: "Product not found" });
        }
        console.log("Product deleted");
        res.send('Product deleted');
      })
      .catch(err => {
        console.error("Failed to delete product:", err);
        res.status(500).send({ error: "Failed to delete product" });
      })
    })
    

  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
    //console.log("DB connection closed")
  }
}
run().catch(console.dir);

app.listen(3000)