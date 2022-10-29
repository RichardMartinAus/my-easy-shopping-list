const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    password: String
    savedLists: [List]
  }

  type List {
    listId: ID!
    listName: String
    items: [String]
  }

  type Auth {
    token: ID
    user: User
  }

  input ListInput {
    listName: String
    items: [String]
  }

  type Query {
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    saveList(listData: ListInput): User
  }
`;

module.exports = typeDefs;
