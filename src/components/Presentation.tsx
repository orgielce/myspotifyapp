import React, {FunctionComponent} from "react";
import {PresentationProps} from "../utilities/types";

export const Presentation: FunctionComponent<PresentationProps> = ({title}) => {
  // console.log(title);
  const elements = [8];

  return (
    <div className="grid place-items-center">
      <div className="text-4xl">{title}</div>
      <div className="grid place-items-end mt-8">paginator</div>
      <div className="flex flex-wrap content-between w-auto w-full">
        <div>aaaaaa</div>
        <div>aaaaaa</div>
        <div>aaaaaa</div>
        <div>aaaaaa</div>
        <div>aaaaaa</div>
        <div>aaaaaa</div>
        <div>aaaaaa</div>
        <div>aaaaaa</div>
        <div>aaaaaa</div>
        <div>aaaaaa</div>
        <div>aaaaaa</div>
      </div>
    </div>
  );
};
