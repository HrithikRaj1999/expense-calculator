import { ApolloServer } from "@apollo/server";
import mergedResolvers from "./resolvers/mergedResolvers";
import mergedTypeDefs from "./typeDefs/mergedType";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";
dotenv.config();
const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
});
export default async function startGraphqlServer() {
  try {
    const PORT = parseInt(process.env.APOLLO_PORT!) ?? 4000;
    const { url } = await startStandaloneServer(server as any, {
      listen: { port: PORT },
    });
    console.log(`Apollo Server Ready at ${url}`);
  } catch (error) {
    console.error(`Apollo Server Connection Error: ${error}`);
  }
}
