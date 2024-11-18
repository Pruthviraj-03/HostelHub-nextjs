import Locations from "../models/locations.model.js";
import Hostels from "../model/hostels.model.js";

const resolvers = {
  Query: {
    locations: async () => {
      return Locations.find();
    },
    locationWiseHostel: async (_, { locationId }) => {
      if (!locationId) throw new Error("Location ID is required");
      const location = await Locations.findById(locationId);
      if (!location) throw new Error("Location not found");
      return Hostels.find({ locationId: location.id });
    },
  },
};

export default resolvers;
