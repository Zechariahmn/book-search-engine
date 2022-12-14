const { gql } = require('apollo-server-express');

// typeDefs
const typeDefs = gql`
    type Book {
        _id: ID
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedBooks: [Book]        
    }

    type Query {
        me: User
    }

    type Auth {
    token: ID!
    user: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addBook(
          authors: [String]!, 
          description: String!, 
          bookId: String!, 
          image: String!, 
          link: String!, 
          title: String!
        ): User
        removeBook(bookId: String!): User
      }
    `;
    
    module.exports = typeDefs;