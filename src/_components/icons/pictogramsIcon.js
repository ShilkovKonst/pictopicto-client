import React from "react";

export const PictogramsIcon = ({ pathname }) => {
  return (
    <svg
      className={`w-8 h-8 md:w-6 md:h-6 transition duration-150 ease-in-out ${
        pathname === "/dashboard/pictograms" ? "text-pred" : "text-pbg group-hover:text-pred"
      } `}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default PictogramsIcon;