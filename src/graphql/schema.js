import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLSchema,
} from "graphql";
import HostelType from "./types/Hostel";
import LocationType from "./types/Location";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    locations: {
      type: new GraphQLList(LocationType),
      resolve: async (_, __, { db }) => {
        return db.Locations.find();
      },
    },
    locationWiseHostel: {
      type: new GraphQLList(HostelType),
      args: { locationId: { type: GraphQLID } },
      resolve: async (_, { locationId }, { db }) => {
        const location = await db.Locations.findById(locationId);
        if (!location) throw new Error("Location not found");
        return db.Hostels.find({ locationId: location.id });
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;
