"use client";
import React from "react";
import CategoryHead from "./_categoryHead";
import CategoryForm from "./_categoryForm";
import { usePathname } from "next/navigation";

const CatCreate = ({ categories, questions }) => {
  const pathname = usePathname();
  return (
    <>
      <table className="table w-full">
        <CategoryHead category={null} />
      </table>
      <CategoryForm
        category={null}
        categories={categories}
        questions={questions}
        pathname={pathname}
      />
    </>
  );
};

export default CatCreate;
