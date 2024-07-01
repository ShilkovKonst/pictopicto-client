"use client";
import React from "react";
import CategoryHead from "./_categoryHead";
import CategoryForm from "./_categoryForm";
import { usePathname } from "next/navigation";

const CatCreate = ({ categories }) => {
  const pathname = usePathname();
  return (
    <>
      <table className="table w-full">
        {category && <CategoryHead category={null} />}
      </table>
      {category && (
        <CategoryForm
          category={null}
          categories={categories}
          pathname={pathname}
        />
      )}
    </>
  );
};

export default CatCreate;
