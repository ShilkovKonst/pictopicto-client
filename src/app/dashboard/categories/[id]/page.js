import Category from "@/_components/dashboard/categories/category/Category";
import {
  getAllBySupercategory,
  getOneById,
} from "@/_helpers/categoryApiHelper";
import React from "react";

const page = async ({ params }) => {
  const category = await getOneById(params.id);
  const subcategories = await getAllBySupercategory(params.id);
  const supercategory = category.supercategory
    ? await getOneById(category.supercategory)
    : null;
  return (
    <Category
      category={category ?? null}
      subcategories={subcategories ?? null}
      supercategory={supercategory ?? null}
    />
  );
};

export default page;
