"use client";
import React from "react";
import CategoryHead from "./_categoryHead";
import CategoryForm from "./_categoryForm";
import { usePathname } from "next/navigation";

const CatUpdate = ({ category, categories }) => {
  const pathname = usePathname();
  return (
    <>
      <table className="table w-full">
        {category && <CategoryHead category={category} pathname={pathname} />}
      </table>
      {category && (
        <CategoryForm
          category={category}
          categories={categories}
          pathname={pathname}
        />
      )}
    </>
  );
};

export default CatUpdate;
