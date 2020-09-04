import express from "express";
import morgan from "morgan";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hw";
import { connect } from "mongoose";
require("dotenv").config();
const app = express();

app.use(morgan("dev"));

app.get("/", (_req, res) => {
  res.status(200).json({ acknowleged: true });
});

const runServer = async () => {
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false,
    }),
  });

  apolloServer.applyMiddleware({ app });

  connect(String(process.env.MONGO_CONNECTION_URL), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("Database connected");
    app.listen(4500, (err) => {
      if (err) console.error(err);
      else
        console.log(
          `Application worker ${process.pid} is runnig a server at http://localhost:4500`
        );
    });
  });
};
runServer().catch(console.error);
