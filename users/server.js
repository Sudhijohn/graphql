const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;

const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true,
  })
);

app.listen(5000, () => {
  console.log("Application started at 5000");
});
