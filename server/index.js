const express = require("express");
const cors = require("cors");
var jwt = require("jsonwebtoken");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.reoqk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const verifyRequest = (req, res, next) => {
  const tokenInfo = req.headers.accesstoken;
  if (tokenInfo) {
    const [email, token] = tokenInfo.split(" ");
    if (email && token) {
      jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {
        if (err) {
          res.send({ error: "Error Occured!!Unathurozied access" });
        } else {
          if (decoded === email) {
            next();
          } else {
            res.send({ error: "Sorry Unathurozied access" });
          }
        }
      });
    }
  } else {
    res.send({ error: "Sorry Unathurozied access" });
  }
};

async function run() {
  try {
    await client.connect();
    const database = client.db("gadget-hub");
    const gadgets = database.collection("gadgets");
    console.log("Db connected");

    app.post("/login", async (req, res) => {
      const email = req.body.email;
      const token = jwt.sign(email, process.env.ACCESS_TOKEN);
      res.send({ token });
    });

    app.post("/addGadgetsData", async (req, res) => {
      const newgadget = req.body;
      const result = await gadgets.insertOne(newgadget);
      res.send(result);
    });

    app.get("/readGadgetsData", async (req, res) => {
      const limit = req.query.limit;
      const email = req.query.email;
      let result;
      if (limit) {
        result = await gadgets.find({}).limit(parseInt(limit));
      } else if (email) {
        result = await gadgets.find({ supplier_name: email });
      } else {
        result = await gadgets.find({});
      }
      res.send(await result.toArray());
    });

    app.get("/readmyGadgetsData", async (req, res) => {
      const email = req.query.email;
      let result;
      if (email) {
        result = await gadgets.find({ supplier_name: email });
      }
      res.send(await result.toArray());
    });

    app.get("/readSingleGadgetsData/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await gadgets.findOne(query);
      res.send(result);
    });

    app.put("/deliverGadgetData/:id", verifyRequest, async (req, res) => {
      const id = req.params.id;
      const filter = { _id: ObjectId(id) };
      const singleGadget = await gadgets.findOne(filter);
      const options = { upsert: true };
      const updateDoc = {
        $set: { quantity: parseInt(singleGadget.quantity) - 1 },
      };
      const result = await gadgets.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    app.delete("/deleteGadgetData/:id", verifyRequest, async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await gadgets.deleteOne(query);
      res.send(result);
    });

    app.post("/updateStock", verifyRequest, async (req, res) => {
      const id = req.body._id;
      const newQuantity = req.body.stock;
      console.log(req.body);
      const filter = { _id: ObjectId(id) };
      const singleGadget = await gadgets.findOne(filter);
      const options = { upsert: true };
      const updateDoc = {
        $set: { quantity: parseInt(singleGadget?.quantity) + newQuantity },
      };
      const result = await gadgets.updateOne(filter, updateDoc, options);
      res.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hey i am from server");
});

app.listen(port, () => {
  console.log("Server running");
});
