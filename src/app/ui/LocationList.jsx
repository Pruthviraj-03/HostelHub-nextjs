"use client";

import React from "react";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      image
      hostels
    }
  }
`;

const LocationList = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="w-full flex flex-wrap justify-center my-12 gap-10 laptop:gap-6 mobile:flex-col mobile:items-center mobile:mt-110 mobile:my-0 mobile:mb-8 tablet:gap-7">
      {data.locations.map((location) => (
        <Link
          key={location.id}
          href={`/location/${location.id}?name=${encodeURIComponent(
            location.name
          )}`}
          passHref
        >
          <a className="relative w-1/4 laptop:w-30 tablet:w-45 mobile:w-11/12">
            <img
              className="rounded-xl h-96 w-full object-cover cursor-pointer mobile:h-72 hover:brightness-75"
              src={location.image}
              alt={location.name}
            />
            <div className="absolute top-4 left-4 text-white font-bold text-xl bg-black bg-opacity-50 p-2 rounded-md">
              <span>
                {location.name}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg"
                  alt="India Flag"
                  className="inline-block w-6 h-4 ml-3 mb-1"
                />
              </span>
            </div>
            <div className="absolute bottom-4 right-4 text-white font-semibold text-lg bg-black bg-opacity-50 p-2 rounded-md">
              {location.hostels.length} Hostels
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default LocationList;
