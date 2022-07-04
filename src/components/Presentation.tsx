import React, {FunctionComponent} from "react";
import {PresentationProps} from "../utilities/types";
import {Card} from "./Card";

// pagination icons
import {AiFillHeart} from "react-icons/ai";
import {BsChatSquareFill} from "react-icons/bs";

export const Presentation: FunctionComponent<PresentationProps> = ({
  title,
  type,
  albums,
  artists,
}) => {
  return (
    <div className="grid place-items-center">
      <div className="text-4xl">{title}</div>
      <div className="grid place-items-end mt-8">pagination</div>
      {type && (
        <div className="h-full md:h-screen w-full">
          <section className="container mx-auto px-2 md:px-2 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 justify-items-center gap-3">
              {albums?.items.map((element, index) => (
                <Card
                  key={element.id}
                  title={element.name}
                  image={element.images[1].url}
                  artist={element.artists[0]}
                  type={"release"}
                />
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
