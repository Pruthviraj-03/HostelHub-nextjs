import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} from "graphql";

const LocationType = new GraphQLObjectType({
  name: "LocationType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    image: { type: GraphQLString },
    hostels: { type: new GraphQLList(GraphQLID) },
  }),
});

export default LocationType;
