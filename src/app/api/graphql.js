import { ApolloServer } from "apollo-server-micro";
import schema from "../../graphql/schema.js";
import resolvers from "../../graphql/resolvers.js";
import Locations from "../../model/locations.model.js";
import Hostels from "../../model/hostels.model.js";

const apolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers,
  context: ({}) => ({
    db: {
      Locations,
      Hostels,
    },
  }),
});

const startServer = apolloServer.start();

export default async (req, res) => {
  await startServer;
  apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
};

export const config = {
  api: {
    bodyParser: false,
  },
};
