import { ApolloServer, gql } from "apollo-server";
import { schema } from "./schemas/schema";

// // import mocks from "./schemas/mocks";

const typeDefs = gql`
  type Query {
    getUser(id: Int): User
  }

  type User {
    id: Int
    name: String
    mail: String
    password: String
    accounts: [Account]
  }

  type Account {
    number: String
    sortcode: String
    balance: Float
  }
`;

const User = {
  id: 12,
  name: "Fred"
};

const Users = [
  {
    id: 12,
    name: "Fred"
  },
  {
    id: 13,
    name: "Harv"
  },
  {
    id: 14,
    name: "Con"
  }
];

function whichUser(id) {
  console.log(id);
  let test = { name: "todd" };
  Users.forEach(element => {
    if (element.id == id) {
      console.log(element);
      test = element;
    }
  });
  return test;
}

const resolvers = {
  Query: {
    getUser(obj, args) {
      return whichUser(args.id);
    }
  }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
