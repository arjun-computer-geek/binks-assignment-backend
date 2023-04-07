const { MongoClient, ServerApiVersion } = require("mongodb");

const connectDatabase = () => {
  const uri = process.env.DB_URI;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
  client
    .connect((err) => {
      console.log(err);
      client.close();
    })
    .then(() => {
      console.log("database connected");
    });
};

module.exports = connectDatabase;
