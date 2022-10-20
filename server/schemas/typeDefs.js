const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    savedLists: [List]
  }

  type List {
    listID: ID!
    listName: String!
    items: [Item]
  }

  type Item {
    itemID: ID!
    itemName: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
    list(listID: ID!): List
  }

  input SaveListInput {
    items: [String]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String!, email: String!, password: String!): User
    addList(listData: SaveListInput): User
    updateList(listID: ID!, listData: SaveListInput): List
    removeList(listID: ID!): User
    addItem(itemName: String!): List
    removeItem(itemID: ID!): List
  }
`;

module.exports = typeDefs;
