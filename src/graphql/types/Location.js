import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";
import HostelType from "./Hostel.js";

const LocationType = new GraphQLObjectType({
  name: "Location",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    address: { type: GraphQLString },
    hostels: {
      type: new GraphQLList(HostelType),
      resolve(parent) {
        return parent.hostels;
      },
    },
  },
});

export default LocationType;
