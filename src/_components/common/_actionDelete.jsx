"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import RemoveIcon from "../icons/removeIcon";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { deleteOneById } from "@/_helpers/categoryApiHelper";

const ActionDelete = ({ entity }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [toDelete, setToDelete] = useState(false);
  const handleClick = async () => {
    try {
      const formData = new FormData();
      formData.append("fileName", entity.media.imageName);
      const response = await deleteOneById(entity.id);
      const requestOptions = { method: "DELETE", body: formData };
      const imageResponse = await fetch("/api/category", requestOptions);
      const result = await imageResponse.json();
      setToDelete(false);
      pathname.split("/").length > 3 &&
        router.push(`/dashboard/categories`);
      router.refresh();
    } catch (error) {
      console.log(error);
      throw new Error(
        "Une erreur s'est produite lors de l'envoi du message. " + error.message
      );
    }
  };
  return (
    <>
      <button
        onClick={() => setToDelete(true)}
        className="group relative bg-pbg hover:bg-pred transition ease-in-out duration-300 h-10 w-10 rounded-3xl px-2 font-bold tracking-[1.25px] border-none outline-none flex flex-row justify-center items-center text-xs sm:text-sm my-1"
      >
        <RemoveIcon />
        <div className="hidden group-hover:block absolute bottom-[100%] -right-[30%] rounded-lg p-1 cursor-default">
          <p className="text-xs text-black">Effacer</p>
        </div>
      </button>
      <Modal show={toDelete} size="md" onClose={() => setToDelete(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-red-400" />
            <h3 className="mb-5 text-lg font-normal text-gray-500">
              Êtes-vous sûr(e) de vouloir supprimer cette catégorie{" "}
              {entity.title} ?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => handleClick()}>
                Oui, je suis sûr(e)
              </Button>
              <Button color="gray" onClick={() => setToDelete(false)}>
                Non, annuler
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ActionDelete;
