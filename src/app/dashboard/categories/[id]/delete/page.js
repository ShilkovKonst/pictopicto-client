"use server";
import CategoriesList from "@/_components/dashboard/categories/CategoriesList";
import Category from "@/_components/dashboard/categories/category/Category";
import { BASE_URL } from "@/_constants/url";
import React from "react";

async function getData(id) {
  const res = await fetch(
    `${BASE_URL}/categories/${id}`,
    { next: { revalidate: 0 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const page = async ({ params }) => {
  const data = await getData(params.id);
  console.log(params)
  return (
  <Category category={data} />
  );
};

export default page;
