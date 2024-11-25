import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLSchema,
} from "graphql";
import HostelType from "./types/Hostel.js";
import LocationType from "./types/Location.js";
import Locations from "../../../model/locations.model.js";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    locations: {
      type: new GraphQLList(LocationType),
      resolve: async () => {
        return await Locations.find();
      },
    },

    locationWiseHostel: {
      type: new GraphQLList(HostelType),
      args: { locationId: { type: GraphQLID } },
      resolve: async (_, { locationId }) => {
        if (!locationId) {
          throw new Error("Invalid locationId format");
        }
        try {
          const location = await Locations.findById(locationId).populate(
            "hostels"
          );
          if (!location) {
            throw new Error("Location not found");
          }
          return location.hostels;
        } catch (error) {
          throw new Error(error);
        }
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;
