import Locations from "../../../model/locations.model.js";
import Hostels from "../../../model/hostels.model.js";

const resolvers = {
  Query: {
    locations: async () => {
      try {
        const locations = await Locations.find().populate("hostels");
        return locations;
      } catch (error) {
        throw new Error(error);
      }
    },
    locationWiseHostel: async (_, { locationId }) => {
      if (!locationId) {
        throw new Error("Location ID is required");
      }
      try {
        const location = await Locations.findById(locationId).populate(
          "hostels"
        );
        if (!location) {
          throw new Error("Location not found");
        }
        const hostels = await Hostels.find({ locationId: location.id });
        return hostels;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

export default resolvers;
