import React, {FunctionComponent} from "react";
import {PresentationProps} from "../utilities/types";

export const Presentation: FunctionComponent<PresentationProps> = ({
  title,
  type,
  albums,
  artists,
}) => {
  // console.log(title);

  return (
    <div className="grid place-items-center">
      <div className="text-4xl">{title}</div>
      <div className="grid place-items-end mt-8">pagination</div>
      {type}
    </div>
  );
};
