import React, {useEffect} from "react";
import {Presentation} from "../components/Presentation";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import axios from "axios";
import {BASE_APP_URL} from "../utilities/constants";
import {openPopup} from "../components/notification";
import {
  setArtistsBegin,
  setArtistsFiled,
  setArtistsSuccess,
} from "../redux/reducers/artistsSlice";

export const Artists = () => {
  const dispatch = useDispatch();
  const {artists, page, filter, isLoading, error} = useSelector(
    (state: RootState) => state.artistsFounded
  );
  const {access_token} = useSelector((state: RootState) => state.token);

  useEffect(() => {
    dispatch(setArtistsBegin());
    axios(
      `${BASE_APP_URL}/search?q=artist%3A${filter}&type=artist&limit=14&offset=${page}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      }
    )
      .then((res) => dispatch(setArtistsSuccess(res.data)))
      .catch((error) => dispatch(setArtistsFiled()));
  }, [page, filter]);

  return (
    <>
      {isLoading && <div className="app-spinner"></div>}

      {error &&
        openPopup(
          "error",
          null,
          `No fue posible cargar los nuevos lanzamientos, vualva a intentarlo por favor.`,
          "top"
        )}

      <Presentation title="Artistas Encontrados" type={"artist"} artists={artists} />
    </>
  );
};
