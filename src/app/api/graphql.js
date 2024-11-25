import { ApolloServer } from "apollo-server-micro";
import schema from "./graphql/schema.js";
import resolvers from "./graphql/resolvers.js";
import { dbConnect } from "../../config/dbConnect.js";

const apolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: async () => {
    await dbConnect();
    return {};
  },
});

const startServer = apolloServer.start();

export async function GET(req, res) {
  await startServer;
  return apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export async function POST(req, res) {
  await startServer;
  return apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
