import CategoriesList from "@/_components/dashboard/categories/CategoriesList";
import { getAll } from "@/_helpers/categoryApiHelper";
import React from "react";

const page = async ({ searchParams }) => {
  const data = await getAll(
    searchParams.page ?? 0,
    searchParams.size ?? 5,
    searchParams.isSeance ?? false
  );
  console.log(data);
  return <CategoriesList data={data ?? null} />;
};

export default page;
