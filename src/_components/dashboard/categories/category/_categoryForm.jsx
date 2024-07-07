"use client";
import { createOne, getOneMediaFile, updateOneById } from "@/_helpers/categoryApiHelper";
import { FileInput, Label, Select, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CategoryForm = ({ category, categories, pathname }) => {
  const router = useRouter();

  const [form, setForm] = useState({
    imageFile: null,
    title: category ? category?.title : "",
    supercategory:
      category && category?.supercategory ? category?.supercategory : -1,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setForm({
      ...form,
      imageFile: e?.target?.files[0] ?? null,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("supercategory", form.supercategory);
    form.imageFile && formData.append("imageFile", form.imageFile);
    try {
      // on create category
      if (pathname.includes("create")) {
        const response = await createOne(formData);
        console.log("response from update", response);
        router.push(`/dashboard/categories/${response.id}`);
        router.refresh();
      }
      // on update category
      else {
        const response = await updateOneById(category?.id, formData);
        console.log("response from update", response);
        router.push(`/dashboard/categories/${response.id}`);
        router.refresh();
      }
    } catch (error) {
      console.log(error);
      throw new Error(
        "Une erreur s'est produite lors de l'envoi du message. " + error.message
      );
    }
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="my-5">
        <Label
          htmlFor="imageName"
          value={
            pathname.includes("create")
              ? `Image`
              : `Image: ${category?.media?.imageName}`
          }
        />
        <FileInput
          id="imageName"
          helperText="Inserer l'image de votre catégorie"
          name="imageName"
          onChange={handleFileChange}
          required={pathname.includes("create")}
        />
      </div>
      <div className="mb-5">
        <Label htmlFor="title" value={`Title`} />
        <TextInput
          id="title"
          type="text"
          sizing="sm"
          name="title"
          onChange={handleChange}
          value={form.title}
          required
        />
      </div>
      <div className="mb-5">
        <Label htmlFor="supercategory" value={`Super-catégorie:`} />
        <Select
          id="supercategory"
          name="supercategory"
          onChange={handleChange}
          defaultValue={form.supercategory}
          required
        >
          <option value={-1}>Sans super-catégorie</option>
          {categories && categories.map(
            (cat, i) =>
              cat.id != category?.id &&
              !cat.supercategory && (
                <option key={i} value={cat.id}>
                  {cat.title}
                </option>
              )
          )}
        </Select>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Confirmer
      </button>
    </form>
  );
};

export default CategoryForm;
