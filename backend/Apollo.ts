import { ApolloServer } from "@apollo/server";
import mergedResolvers from "./resolvers/mergedResolvers";
import mergedTypeDefs from "./typeDefs/mergedType";
import { startStandaloneServer } from "@apollo/server/standalone";

const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
});

export default async function startServer() {
  const { url } = await startStandaloneServer(server as any, {
    listen: { port: 4000 },
  });
  console.log(`Apollo Server Ready at ${url}`);
}

