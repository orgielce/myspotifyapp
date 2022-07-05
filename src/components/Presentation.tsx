import React, {FunctionComponent} from "react";
import {BsArrowLeftCircle} from "react-icons/bs";
import {PresentationProps} from "../utilities/types";
import {Card} from "./Card";
import {Pagination} from "./Pagination";
import {useDispatch} from "react-redux";
import {setCurrentPage, setDataType} from "../redux/reducers/tokenSlice";

export const Presentation: FunctionComponent<PresentationProps> = ({
  title,
  type,
  albums,
  artists,
  tracks,
}) => {
  const dispatch = useDispatch();

  const goBackHandle = () => {
    dispatch(setCurrentPage({page: 10}));
    dispatch(setDataType({loadDataFrom: "release"}));
  };

  return (
    <div className="grid place-items-center mb-20">
      <div className="flex flex-nowrap text-4xl">
        {type !== "release" && (
          <BsArrowLeftCircle
            onClick={goBackHandle}
            className="text-3xl cursor-pointer mr-7 mt-2"
          />
        )}
        {title}
      </div>
      <Pagination />
      <div className="h-full md:h-screen w-full">
        <section className="container mx-auto px-2 md:px-2 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-7 justify-items-center gap-3">
            {type === "release" &&
              albums?.items.map((element, index) => (
                <Card
                  id={element.id}
                  key={element.id}
                  title={element.name}
                  image={element.images[1].url}
                  name={element.artists[0].name}
                  type={"release"}
                />
              ))}
            {type === "artist" &&
              artists?.items.map((element, index) => (
                <Card
                  key={element.id}
                  name={element.name}
                  image={
                    element &&
                    element.images &&
                    element.images.length &&
                    element.images.length > 0
                      ? element.images[0].url
                      : ""
                  }
                  title={""}
                  type={"artist"}
                />
              ))}
            {type === "track" &&
              tracks?.items.map((element: any) => (
                <Card
                  key={element.id}
                  name={element.name}
                  image={
                    element &&
                    element.album &&
                    element.album.images &&
                    element.album.images.length &&
                    element.album.images.length > 0
                      ? element.album.images[0].url
                      : ""
                  }
                  title={element.artists[0].name}
                  type={"track"}
                  track={element?.preview_url}
                />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};
