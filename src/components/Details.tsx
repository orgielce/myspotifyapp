import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {BASE_APP_URL} from "../utilities/constants";
import {Artist} from "../models";
import styled from "styled-components";
import {RelatedArtists} from "./RelatedArtists";
import {ArtistHistory} from "./ArtistHistory";

const DivideContainer = styled.div`
  border: 0.1px solid #8f8e94 !important;
  margin: 15px 0 3px 0px;
  width: 95%;
`;
const EndDivideContainer = styled.div`
  border: 0.1px solid #8f8e94 !important;
  margin-top: 8px;
`;

export const Details = () => {
  // @ts-ignore
  const {id: artistId} = useParams();
  // @ts-ignore
  const [currentArtist, setCurrentArtist] = useState<Artist>({});

  useEffect(() => {
    axios(`${BASE_APP_URL}/artists/${artistId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      // fetch related artists
      axios(`${BASE_APP_URL}/artists/${artistId}/related-artists`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((related) => {
        // fetch albums artist
        axios(`${BASE_APP_URL}/artists/${artistId}/albums`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }).then((albums) => {
          // fetch Artist's Top Tracks
          axios(`${BASE_APP_URL}/artists/${artistId}/top-tracks?market=ES`, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }).then((tracks) => {
            const artist: Artist = {
              ...res.data,
              related_artists: related.data.artists,
              albums: albums.data.items,
              tracks: tracks.data.items,
            };
            setCurrentArtist(artist);
          });
        });
      });
    });
  }, [artistId]);

  return (
    <>
      <div className="grid grid-cols-5 gap-36 h-screen mb-64">
        <div className="col-span-2">
          <img
            className="w-44 ml-20 mb-6 rounded-full"
            src={
              currentArtist &&
              currentArtist.images &&
              currentArtist.images.length > 0 &&
              currentArtist?.images[0].url
                ? currentArtist?.images[0].url
                : ""
            }
            alt="Profile image"
          />
          <div className="flex justify-center text-2xl text-white object-center">
            {currentArtist?.name}
          </div>

          <div className="text-lg text-white mt-8">About</div>
          <DivideContainer></DivideContainer>
          <div className="text-sm text-white mt-2 overflow-y-auto h-48 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker was
            including versions of Lorem Ipsum., remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing Lorem
            Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          <EndDivideContainer></EndDivideContainer>

          <RelatedArtists artist={currentArtist} />
        </div>
        <div className="col-span-3">
          <ArtistHistory artist={currentArtist} />
        </div>
      </div>
    </>
  );
};
