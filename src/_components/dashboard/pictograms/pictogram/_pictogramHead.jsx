import ActionsHeader from "@/_components/common/actionsHeader";
import Link from "next/link";
import React from "react";

const PictogramHead = ({ pictogram }) => {
  return (
    <thead>
      <tr className="border-b">
        {pictogram ? (
          <th className="text-lg flex justify-center items-center">
            <span className=" mx-auto">
              Pictogramme:
              <Link
                className="hover:text-pred trasition duration-150 ease-in-out ml-3"
                href={`/dashboard/pictograms/${pictogram?.id}`}
              >
                {pictogram?.title}
              </Link>
            </span>
            <ActionsHeader entity={pictogram} entityName="pictograms" />
          </th>
        ) : (
          <th className="text-lg flex justify-center items-center">
            <span className=" mx-auto">
              Créer une nouvelle catégorie
            </span>
          </th>
        )}
      </tr>
    </thead>
  );
};

export default PictogramHead;
