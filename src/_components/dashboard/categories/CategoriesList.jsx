import React from "react";
import CategoriesItem from "./_categoriesItem";
import Pagination from "@/_components/common/pagination";
import Link from "next/link";
import ListHeader from "@/_components/common/listHeader";

const CategoriesList = ({ data }) => {
  return (
    <>
      <table className="table w-full relative">
        <ListHeader entityName="categories" />
        <tbody className="flex flex-col gap-1">
          <tr className="absolute -top-3 left-0">
          </tr>
          <tr className="flex flex-row justify-start items-center text-sm sm:text-base py-4 border-b">
            <th className="text-center md:text-start w-1/3">Image</th>
            <th className=" flex justify-center md:justify-start items-center md:text-start w-1/3">
              <Link href={`#`}
                className="flex items-center w-auto {{ sortBy == 'name' ? 'underline decoration-1' }} "
              >
                Titre
              </Link>
            </th>
            <th className="text-center md:text-start w-1/3">Actions</th>
          </tr>
          {data?.content?.map((item, i) => (
            <CategoriesItem key={i} category={item} />
          ))}
        </tbody>
      </table>
      <Pagination data={data} />
    </>
  );
};

export default CategoriesList;
