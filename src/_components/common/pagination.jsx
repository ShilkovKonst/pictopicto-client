"use client";
import React from "react";

const Pagination = ({ data }) => {
    // console.log(data)
  return (
    <div className=" md:absolute bottom-3 right-0 left-0 flex flex-row items-center justify-center gap-3">
      <div className=" min-w-5 sm:min-w-10">
        {!data.first && (
          <a
            href={`/dashboard/categories?page=${0}&size=${data.size}`}
            className="btn-a w-auto min-w-5 sm:min-w-10 flex flex-row justify-center items-center font-normal"
          >
            1
          </a>
        )}
      </div>

      <div className=" min-w-5 sm:min-w-10">
        {/* {% if page > step %} */}
        {/* <a
          href="{{ path(path, { sortBy, sortDir, page: page - step, filter, value }) }}"
          className="btn-a w-auto min-w-5 sm:min-w-10 flex flex-row justify-center items-center"
        >
          <svg
            className="w-4 h-4 sm:w-6 sm:h-6 text-[#f9f9f9]"
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
              d="m17 16-4-4 4-4m-6 8-4-4 4-4"
            />
          </svg>
        </a> */}
        {/* {% endif %} */}
      </div>

      <div className=" min-w-5 sm:min-w-10">
        {data.number > 0 && (
          <a
            href={`/dashboard/categories?page=${data.number-1}&size=${data.size}`}
            className="btn-a w-auto min-w-5 sm:min-w-10 flex flex-row justify-center items-center"
          >
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6 text-[#f9f9f9]"
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
                d="m14 8-4 4 4 4"
              />
            </svg>
          </a>
        )}
      </div>

      <p className="h-10 rounded-3xl px-2 my-3 font-bold text-sm tracking-[1.25px] text-pbg bg-[#f9f9f9] border-none outline-none w-auto min-w-10 flex flex-row justify-center items-center">
        {data.number + 1}
      </p>

      <div className=" min-w-5 sm:min-w-10">
        {data.number < data.totalPages-1 && (
          <a
            href={`/dashboard/categories?page=${data.number+1}&size=${data.size}`}
            className="btn-a w-auto min-w-5 sm:min-w-10 flex flex-row justify-center items-center"
          >
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6 text-[#f9f9f9]"
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
                d="m10 16 4-4-4-4"
              />
            </svg>
          </a>
        )}
      </div>

      <div className=" min-w-5 sm:min-w-10">
        {/* {% if page <= maxPages - step %}  */}
        {/* <a
          href="{{ path(path, { sortBy, sortDir, page: page + step , filter, value }) }}"
          className="btn-a w-auto min-w-5 md:min-w-10 flex flex-row justify-center items-center"
        >
          <svg
            className="w-4 h-4 md:w-6 md:h-6 text-[#f9f9f9]"
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
              d="m7 16 4-4-4-4m6 8 4-4-4-4"
            />
          </svg>
        </a> */}
        {/* {% endif %} */}
      </div>

      <div className=" min-w-5 sm:min-w-10">
        {!data.last && (
          <a
            href={`/dashboard/categories?page=${data.totalPages-1}&size=${data.size}`}
            className="btn-a w-auto min-w-5 sm:min-w-10 flex flex-row justify-center items-center font-normal"
          >
            {data.totalPages}
          </a>
        )}
      </div>
    </div>
  );
};

export default Pagination;
