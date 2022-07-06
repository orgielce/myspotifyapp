import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {BASE_APP_URL} from "../utilities/constants";
import {Artist} from "../models";

export const Details = () => {
  // @ts-ignore
  const {id: artistId} = useParams();
  // @ts-ignore
  const [currentArtist, setCurrentArtist] = useState<Artist>(undefined);

  // useEffect(() => {
  //   axios(`${BASE_APP_URL}/artists/${artistId}`, {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   }).then((res) => setCurrentArtist(res.data));
  // }, [artistId]);

  return (
    <>
      <div className="grid grid-cols-5 gap-20 h-screen">
        {/*<div className="col-span-2">{currentArtist.name}</div>*/}
        <div className="col-span-2">11111111111</div>
        <div className="col-span-3">2nd col</div>
      </div>
    </>
  );
};
