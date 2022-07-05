import React from "react";
import {useParams} from "react-router-dom";

export const Details = () => {
  // @ts-ignore
  const {id} = useParams();

  return (
    <>
      <div className="text-4xl mb-8">Detalles</div>
      ID: {id}
    </>
  );
};
