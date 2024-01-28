const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema');
const { authMiddleware } = require('./utils/auth');

const startApolloServer = async (app) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
   
    context: ({ req }) => {
      const context = authMiddleware({ req });
      return {
        user: context.user || {},
      };
    },
  });

  await server.start();

  server.applyMiddleware({ app, path: '/graphql' });

  return server;
};

module.exports = startApolloServer;
