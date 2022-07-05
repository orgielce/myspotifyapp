import React, {FunctionComponent} from "react";

import {CardProps} from "../utilities/types";
import {useHistory} from "react-router-dom";

export const Card: FunctionComponent<CardProps> = ({
  title,
  image,
  type,
  name,
  id,
  track,
}) => {
  const history = useHistory();

  const goToDetails = () => {
    if (type === "release") {
      history.push(`/details/${id}`);
    }
  };

  return (
    <div
      onClick={goToDetails}
      className="bg-white hover:bg-gray-800 shadow-xl hover:shadow-none cursor-pointer w-auto rounded flex flex-col items-center justify-center transition-all duration-500 ease-in-out"
    >
      <div className="relative mt-2 mx-2">
        <div className="h-48 w-48 rounded overflow-hidden">
          <img src={image} className="object-cover w-full h-full" alt="" />
        </div>
      </div>
      <div className="pt-3 pb-3 w-full">
        {type !== "artist" && (
          <h1 className="leading-none text-customText text-xl">{`${title}`}</h1>
        )}
        <span className="text-customText w-10">{name}</span>
      </div>
    </div>
  );
};
