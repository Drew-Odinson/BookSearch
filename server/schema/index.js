const { gql } = require('apollo-server-express');
const User = require('../models/User'); 


// Type definitions
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    deleteBook(bookId: ID!): User
  }

  input BookInput {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
`;

// Resolvers
const resolvers = {
  Query: {
    // Get the logged in user
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findById(context.user._id).populate('savedBooks');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  Mutation: {
    // Handle user login
    login: async (parent, { email, password }) => {
      // Your login logic here
    },
    // Create a user
    createUser: async (parent, args) => {
      // Your user creation logic here
    },
    // Save a book
    saveBook: async (parent, { bookData }, context) => {
      // Your book saving logic here
    },
    // Delete a book
    deleteBook: async (parent, { bookId }, context) => {
      // Your book deletion logic here
    },
  },
};

module.exports = { typeDefs, resolvers };
