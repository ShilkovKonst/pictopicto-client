"use client";
import ActionsTable from "@/_components/common/actionsTable";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoriesItem = ({ category }) => {
  return (
    <tr className="flex flex-row justify-start items-center text-sm sm:text-base border-b pb-1">
      <td className="flex justify-center md:justify-start w-1/3">
        <Link href={`/dashboard/categories/${category?.id}`}>
          <Image
            className="h-10 w-10 md:h-14 md:w-14"
            src={`/img/categories/${category?.media?.imageName}`}
            alt={category?.media?.imageName}
            width={40}
            height={40}
          />
        </Link>
      </td>
      <td className="text-center md:text-start w-1/3">
        <Link href={`/dashboard/categories/${category?.id}`}>
          {category?.title}
        </Link>
      </td>
      <td className="flex items-center justify-center md:justify-start w-1/3">
        <ActionsTable entity={category} entityName="categories" />
        </td>
    </tr>
  );
};

export default CategoriesItem;
