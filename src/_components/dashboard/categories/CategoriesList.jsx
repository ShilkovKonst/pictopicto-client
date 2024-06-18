"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Spinner } from "flowbite-react";
import CategoriesItem from "./_categoriesItem";
import Pagination from "@/_components/common/pagination";
import ListHeader from "@/_components/common/listHeader";
import { useRouter } from "next/navigation";

const CategoriesList = ({ data }) => {
  return (
    <>
      <table className="table w-full relative min-h-56">
        <ListHeader entityName="categories" />
        <tbody className="flex flex-col gap-1">
          <tr className="absolute -top-3 left-0"></tr>
          <tr className="flex flex-row justify-start items-center text-sm sm:text-base py-4 border-b">
            <th className="text-center md:text-start w-1/3">Image</th>
            <th className=" flex justify-center md:justify-start items-center md:text-start w-1/3">
              <Link
                href={`#`}
                className="flex items-center w-auto {{ sortBy == 'name' ? 'underline decoration-1' }} "
              >
                Titre
              </Link>
            </th>
            <th className="text-center md:text-start w-1/3">Actions</th>
          </tr>
          {data?.content &&
            data.content.map((item, i) => (
              <CategoriesItem key={i} category={item} />
            ))}
        </tbody>
      </table>
      {data && <Pagination data={data} />}
    </>
  );
};

export default CategoriesList;
