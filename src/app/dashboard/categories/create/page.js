import CatCreate from "@/_components/dashboard/categories/category/CatCreate";
import { getAllAsList as getAllCategories } from "@/_helpers/categoryApiHelper";
import { getAll as getAllQuestions } from "@/_helpers/questionApiHelper";
import React from "react";

const page = async () => {  
  const categories = await getAllCategories();
  const questions = await getAllQuestions();
  return <CatCreate categories={categories ?? null} questions={questions} />;
};

export default page;
