const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        savedBooks: [Book]
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        books(username: String): [Book]
        book(bookId: ID!): Book
    }

    type Book {
        bookId: ID
        title: String
        authors: String
        description: String
        image: String
        link: String
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        createUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookId: String!): User
        deleteBook(bookId: ID!): User
    }

    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;