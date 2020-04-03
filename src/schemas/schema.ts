import { ApolloServer, gql } from "apollo-server";

const schema = gql`
  # type Query {
  #   getAllUsers: [User]
  # }

  type Query {
    getUsers: [User]
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

export { schema };
