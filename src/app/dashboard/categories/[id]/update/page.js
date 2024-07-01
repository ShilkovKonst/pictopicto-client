"use server";
import CatUpdate from "@/_components/dashboard/categories/category/CatUpdate";
import { getAll, getOneById } from "@/_helpers/categoryApiHelper";
import React from "react";

const page = async ({ params }) => {
  const category = await getOneById(params.id);
  const categories = await getAll(0, 0, true);

  return <CatUpdate category={category ?? null} categories={categories ?? null} />;
};

export default page;
