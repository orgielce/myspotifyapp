import React, {FunctionComponent} from "react";

import {ArtistHistoryProps} from "../utilities/types";
import {Tooltip} from "antd";
import {BsArrowLeftCircle, BsArrowRightCircle} from "react-icons/bs";
import styled from "styled-components";

const DivideContainer = styled.div`
  border: 0.1px solid #8f8e94 !important;
  margin: 10px 0 60px 0px;
  width: 95%;
`;

export const ArtistHistory: FunctionComponent<ArtistHistoryProps> = ({artist}) => {
  return (
    <>
      <div className="flex flex-nowrap justify-between text-lg text-white mb-4">
        Albums
        <div>
          {/*<div className="mr-5">*/}
          {/*    {page === 10 && <BsArrowLeftCircle className="opacity-25" />}*/}
          {/*    {page > 10 && <BsArrowLeftCircle />}*/}
          {/*</div>*/}
          <div>
            <BsArrowRightCircle />
          </div>
        </div>
      </div>
      <div className="flex flex-nowrap inline gap-4">
        {
          // @ts-ignore
          artist &&
            artist.albums &&
            artist.albums.length > 0 &&
            artist.albums.map(
              (r: any, idx) =>
                idx < 6 && (
                  <Tooltip title={r?.name} color="#8F8E94">
                    <img
                      className="w-80 h-36 rounded cursor-pointer"
                      src={r?.images[0].url}
                      alt="Profile image"
                    />
                    <div>{r?.name}</div>
                    <div className="text-customText">
                      {new Date(r?.release_date).getFullYear()}
                    </div>
                  </Tooltip>
                )
            )
        }
      </div>
      <DivideContainer></DivideContainer>
      <div className="text-lg text-white">Most Popular Tracks</div>
      <div className="blocke gap-4">
        {
          // @ts-ignore
          artist &&
            artist.tracks &&
            artist.tracks.length > 0 &&
            artist.tracks.map((r: any, idx) => (
              <Tooltip title={r?.name} color="#8F8E94">
                <div>{idx + 1}</div>
                <img
                  className="w-80 h-36 rounded cursor-pointer"
                  src={r?.album.images[0].url}
                  alt="Profile image"
                />
                <div>{r?.name}</div>
                {/*<div className="text-customText">*/}
                {/*    {new Date(r?.release_date).getFullYear()}*/}
                {/*</div>*/}
              </Tooltip>
            ))
        }
      </div>
    </>
  );
};
