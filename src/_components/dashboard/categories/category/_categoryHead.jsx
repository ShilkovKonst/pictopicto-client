import ActionsHeader from "@/_components/common/actionsHeader";
import Link from "next/link";
import React from "react";

const CategoryHead = ({ category }) => {
  return (
    <thead>
      <tr className="border-b">
        {category ? (
          <th className="text-lg flex justify-center items-center">
            <span className=" mx-auto">
              Category:
              <Link
                className="hover:text-pred trasition duration-150 ease-in-out ml-3"
                href={`/dashboard/categories/${category?.id}`}
              >
                {category?.title}
              </Link>
            </span>
            <ActionsHeader entity={category} entityName="categories" />
          </th>
        ) : (
          <th className="text-lg flex justify-center items-center">
            <span className=" mx-auto">
              Créer une nouvelle catégorie
            </span>
          </th>
        )}
      </tr>
    </thead>
  );
};

export default CategoryHead;
