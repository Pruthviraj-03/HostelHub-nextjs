"use client";

import React from "react";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../../../redux/actions/cartActions.js";

const GET_HOSTELS_BY_LOCATION = gql`
  query GetHostelsByLocation($locationId: ID!) {
    locationWiseHostel(locationId: $locationId) {
      id
      name
      image
    }
  }
`;

const HostelList = () => {
  const router = useRouter();
  const { locationId } = router.query;
  const location = router.query.name;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const { data, loading, error } = useQuery(GET_HOSTELS_BY_LOCATION, {
    variables: { locationId },
    skip: !locationId,
  });

  const handleAddToCart = (hostel) => {
    dispatch(addToCart(hostel));
  };

  const handleRemoveFromCart = (hostelId) => {
    dispatch(removeFromCart(hostelId));
  };

  const isInCart = (hostelId) => {
    return cartItems.some((item) => item.id === hostelId);
  };

  if (loading)
    return <p className="text-center text-xl font-semibold">Loading...</p>;
  if (error) {
    console.error("Error fetching hostels:", error);
    return (
      <p className="text-center text-xl font-semibold text-red-500">
        Error fetching hostels.
      </p>
    );
  }

  return (
    <div className="mx-auto p-4 tablet:p-6 laptop:p-8 mobile:mx-0">
      <h1 className="text-4xl mobile:text-2xl tablet:text-3xl laptop:text-4xl font-bold text-center mb-4 tablet:mb-6">
        Hostels in {location || "This Location"}
      </h1>
      <div className="grid grid-cols-1 gap-5 mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 pc:grid-cols-4 mt-5">
        {data?.locationWiseHostel?.length > 0 ? (
          data.locationWiseHostel.map((hostel) => (
            <div
              key={hostel.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={hostel.image}
                alt={hostel.name}
                className="w-full h-40 mobile:h-48 tablet:h-56 laptop:h-64 object-cover"
              />
              <div className="p-3 mobile:p-4">
                <h2 className="text-lg mobile:text-xl tablet:text-2xl laptop:text-3xl font-semibold text-gray-800">
                  {hostel.name}
                </h2>
                {isInCart(hostel.id) ? (
                  <button
                    className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
                    onClick={() => handleRemoveFromCart(hostel.id)}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    className="mt-4 px-4 py-2 bg-gray-800 text-white font-semibold rounded hover:bg-gray-600"
                    onClick={() => handleAddToCart(hostel)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-xl font-semibold text-gray-600 col-span-4">
            No hostels available for this location.
          </p>
        )}
      </div>
    </div>
  );
};

export default HostelList;
