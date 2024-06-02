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
        <CategoryHead category={null} />
      </table>
      <CategoryForm category={null} categories={categories} pathname={pathname} />
    </>
  );
};

export default CatCreate;
