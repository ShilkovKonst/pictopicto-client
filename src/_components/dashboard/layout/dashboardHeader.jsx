import images from "@/_constants/images";
import Image from "next/image";
import React from "react";

const DashboardHeader = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full sm:p-4">
      <Image
        src={images.logo}
        alt="LogoEcam.png"
        width={140}
        className="z-10 "
      />
      <div className="flex flex-row gap-1 items-center">
        <div className="flex flex-col justify-end items-center text-end">
          <p className="ml-auto">Bienvenue,</p>
          <p className="font-semibold">
            {/* {{ app.user.firstName }} {{ app.user.lastName }} */}
          </p>
        </div>
        <a
          className="w-10 h-10 bg-pbg hover:bg-pred transition duration-300 ease-in-out rounded-full overflow-hidden"
          href="/logout"
        >
          <svg
            className="w-10 h-10 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default DashboardHeader;
