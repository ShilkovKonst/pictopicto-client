"use client";
import { createOne, updateOneById } from "@/_helpers/categoryApiHelper";
import { Label, Select, TextInput, Checkbox } from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import EntityFormImage from "./_entityFormImage";
import EntityFormCatFields from "./_entityFormCatFields";

const EntityForm = ({ entity, entityName, pathname }) => {
  const router = useRouter();

  const [form, setForm] = useState({
    title: entity ? entity?.title : "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", form.title);
    entityName == "categories" && formData.append("supercategory", form.supercategory);
    entityName == "categories" && formData.append("questions", JSON.stringify(form.questions));
    (entityName == "categories" || entityName == "pictograms") && form.imageFile && formData.append("imageFile", form.imageFile);
    try {
      // on create category
      if (pathname.includes("create")) {
        const response = await createOne(formData);
        console.log("response from create", response);
        router.push(`/dashboard/categories/${response.id}`);
        router.refresh();
      }
      // on update category
      else {
        const response = await updateOneById(entity?.id, formData);
        console.log("response from update", response);
        router.push(`/dashboard/categories/${response.id}`);
        router.refresh();
      }
    } catch (error) {
      throw new Error(
        "Une erreur s'est produite lors de l'envoi du message. " + error.message
      );
    }
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      {(entityName == "categories" || entityName == "pictograms") && (
        <EntityFormImage
          entity={entity}
          form={form}
          setForm={setForm}
          pathname={pathname}
        />
      )}

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
      {entityName == "categories" && (
        <EntityFormCatFields category={entity} form={form} setForm={setForm} handleChange={handleChange} />
      )}
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Confirmer
      </button>
    </form>
  );
};

export default EntityForm;
