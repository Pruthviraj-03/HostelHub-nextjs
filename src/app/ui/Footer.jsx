"use client";

import React from "react";
import Link from "next/link";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const handleRefreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-between px-6 py-2 bg-white mobile:flex-col shadow-[0_-4px_8px_-4px_rgba(0,0,0,0.1)]">
        <span
          onClick={handleRefreshPage}
          className="font-nunito text-xl font-bold text-gray-800 hover:text-gray-500 cursor-pointer"
        >
          HostelHub
        </span>

        <p className="font-nunito py-2 text-gray-800 mobile:text-sm">
          All rights reserved @
          <Link href="https://github.com/Pruthviraj-03/">
            <a target="_blank" className="text-gray-800 hover:text-gray-500">
              GitHub
            </a>
          </Link>
        </p>

        <div className="flex -mx-2">
          <Link href="#">
            <a className="mx-2 text-lg text-gray-800 hover:text-gray-500">
              <FaFacebookF />
            </a>
          </Link>

          <Link href="#">
            <a className="mx-2 text-lg text-gray-800 hover:text-gray-500">
              <BsGithub />
            </a>
          </Link>

          <Link href="#">
            <a className="mx-2 text-lg text-gray-800 hover:text-gray-500">
              <BsTwitter />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;