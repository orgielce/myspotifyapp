import React, {FunctionComponent} from "react";

import {RelatedArtistsProps} from "../utilities/types";
import {Artist} from "../models";
import {Tooltip} from "antd";

export const RelatedArtists: FunctionComponent<RelatedArtistsProps> = ({artist}) => {
  return (
    <>
      <div className="text-lg text-white mt-8 mb-4">Similar to {artist?.name}</div>
      <div className="flex flex-wrap gap-4">
        {
          // @ts-ignore
          artist &&
            artist.related_artists &&
            artist.related_artists.length > 0 &&
            artist.related_artists.map((r: Artist, idx) => (
              <Tooltip title={r?.name} color="#8F8E94">
                <img
                  className="w-20 h-20 rounded-full cursor-pointer"
                  src={r?.images[0].url}
                  alt="Profile image"
                />
              </Tooltip>
            ))
        }
      </div>
    </>
  );
};
