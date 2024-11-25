import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const HostelType = new GraphQLObjectType({
  name: "HostelType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    image: { type: GraphQLString },
  }),
});

export default HostelType;
