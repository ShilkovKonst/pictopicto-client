"use client";
import { Accordion } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CategoryHead from "./_categoryHead";
import {
  getOneMediaFile,
} from "@/_helpers/categoryApiHelper";

const Category = ({
  category,
  subcategories,
  supercategory,
}) => {
  const [pictograms, setPictograms] = useState([]);
  const [imageSrc, setImageSrc] = useState("");
  useEffect(() => {
    getOneMediaFile(category?.media?.id, setImageSrc);
  }, [category?.media?.id]);

  return (
    <>
      <table className="table w-full">
      {category && <CategoryHead category={category} />}
        <tbody className="flex flex-col gap-2">
          {category && (
            <tr className="flex flex-row flex-wrap gap-1 lg:gap-0 justify-start items-start md:items-center text-sm sm:text-base p-2 border-b">
              <th className="text-start w-[40%] lg:w-[20%]">Image</th>
              <td className="text-start w-[45%] lg:w-[30%]">
                {imageSrc.length > 0 && (
                  <Image
                    className="h-14 w-14 md:h-16 md:w-16"
                    src={imageSrc}
                    alt={category?.media?.imageName}
                    width={60}
                    height={60}
                  />
                )}
              </td>
              {supercategory && (
                <>
                  <th className="text-start w-[40%] lg:w-[20%]">
                    Super category:{" "}
                  </th>
                  <td className="text-start w-[45%] lg:w-[30%]">
                    <Link href={`/dashboard/categories/${supercategory?.id}`}>
                      {supercategory.title}
                    </Link>
                  </td>
                </>
              )}
            </tr>
          )}
        </tbody>
      </table>
      <Accordion collapseAll>
        {pictograms && (
          <Accordion.Panel>
            <Accordion.Title>Pictogrammes</Accordion.Title>
            <Accordion.Content>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                {pictograms.length > 0 &&
                  pictograms?.map((subCat, i) => (
                    <li key={i}>
                      <Link
                        href={`/dashboard/pictograms/${pictograms?.id}`}
                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        {pictograms?.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
        )}
        {subcategories && (
          <Accordion.Panel>
            <Accordion.Title>Sous-catégories</Accordion.Title>
            <Accordion.Content>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                {subcategories.map((subCat, i) => (
                  <li key={i}>
                    <Link
                      href={`/dashboard/categories/${subCat.id}`}
                      className="text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      {subCat.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
        )}
      </Accordion>
    </>
  );
};

export default Category;
