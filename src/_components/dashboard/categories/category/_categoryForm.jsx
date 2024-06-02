"use client";
import { createOne, updateOneById } from "@/_helpers/categoryApiHelper";
import { FileInput, Label, Select, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CategoryForm = ({ category, categories, pathname }) => {
  const router = useRouter();

  const [form, setForm] = useState({
    imageName: category.media.imageName,
    imageFile: null,
    title: category ? category.title : "",
    supercategory:
      category && category?.supercategory ? category.supercategory : null,
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
    console.log(form);
    const body = {
      imageName: form.imageFile
        ? form.imageFile.name
        : category
        ? category.media.imageName
        : "",
      title: form.title,
      supercategory: form.supercategory,
    };
    try {
      // on create category
      if (pathname.includes("create")) {
        const response = await createOne(body);

        // saving new image to public folder
        const formData = new FormData();
        formData.append("imageFile", form.imageFile);
        const requestOptions = { method: "POST", body: formData };
        const imageResponse = await fetch("/api/category", requestOptions);
        const result = await imageResponse.json();
        console.log("result", result);
        router.push(`/dashboard/categories/${response.id}`);
        router.refresh();
      }
      // on update category
      else {
        const response = await updateOneById(category.id, body);
        console.log("response from update", response);
        console.log(form);
        // saving new image to public folder
        if (form.imageFile) {
          // delete old image
          const imageToDelete = new FormData();
          imageToDelete.append("fileName", form.imageName);
          const deleteOptions = { method: "DELETE", body: imageToDelete };
          const deleteImageResponse = await fetch(
            "/api/category",
            deleteOptions
          );
          const deleteResult = await deleteImageResponse.json();
          console.log("deleteResult", deleteResult);

          // assign new image
          const formData = new FormData();
          formData.append("imageFile", form.imageFile);
          const postOptions = { method: "POST", body: formData };
          const imageResponse = await fetch("/api/category", postOptions);
          const postResult = await imageResponse.json();
          console.log("result", postResult);
        }
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
              : `Image: ${category.media.imageName}`
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
          <option value={null}>Sans super-catégorie</option>
          {categories.map(
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
