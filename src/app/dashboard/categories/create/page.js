import CategoriesList from "@/_components/dashboard/categories/CategoriesList";
import CatCreate from "@/_components/dashboard/categories/category/CatCreate";
import { getAll } from "@/_helpers/categoryApiHelper";
import React from "react";

const page = async () => {  
  const categories = await getAll(0, 0, true);
  return <CatCreate categories={categories ?? null} />;
};

export default page;
