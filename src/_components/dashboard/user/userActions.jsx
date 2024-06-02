import React from "react";

const UserActions = ({ path1, path2 }) => {
  return (
    <div className="flex ml-3 flex-row items-center justify-evenly md:justify-end gap-3">
      <a
        href={path1}
        className="group relative bg-pbg hover:bg-pred transition ease-in-out duration-300 h-10 w-10 rounded-3xl px-2 font-bold tracking-[1.25px] border-none outline-none flex flex-row justify-center items-center text-xs sm:text-sm my-1 group"
      >
        <svg
          className="w-6 h-6 text-[#f9f9f9]"
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
            d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          />
        </svg>
        <div className="hidden group-hover:block absolute bottom-[100%] -right-[25%] rounded-lg p-1 cursor-default">
          <p className="text-xs text-black">Modifier</p>
        </div>
      </a>
      <a
        href={path2}
        className="group relative bg-pbg hover:bg-pred transition ease-in-out duration-300 h-10 w-10 rounded-3xl px-2 font-bold tracking-[1.25px] border-none outline-none flex flex-row justify-center items-center text-xs sm:text-sm my-1 group"
      >
        <svg
          className="w-6 h-6 text-[#f9f9f9]"
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
            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
          />
        </svg>
        <div className="hidden group-hover:block absolute bottom-[100%] -right-[25%] rounded-lg p-1 cursor-default">
          <p className="text-xs text-black">Désactiver</p>
        </div>
      </a>
    </div>
  );
};

export default UserActions;
