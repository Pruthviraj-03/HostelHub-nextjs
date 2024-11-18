import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const HostelType = new GraphQLObjectType({
  name: "Hostel",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    locationId: { type: GraphQLID },
  },
});

export default HostelType;
