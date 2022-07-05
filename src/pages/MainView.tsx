import React, {useEffect} from "react";
import {Presentation} from "../components/Presentation";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import axios from "axios";
import {BASE_APP_URL} from "../utilities/constants";
import {
  setAlbumsBegin,
  setAlbumsFiled,
  setAlbumsSuccess,
} from "../redux/reducers/releaseSlice";
import {openPopup} from "../components/notification";

export const MainView = () => {
  const dispatch = useDispatch();
  const {albums, page, limit, isLoading, error} = useSelector(
    (state: RootState) => state.releases
  );
  const {access_token} = useSelector((state: RootState) => state.token);

  useEffect(() => {
    dispatch(setAlbumsBegin());
    axios(`${BASE_APP_URL}/browse/new-releases?limit=${limit}&offset=${page}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => dispatch(setAlbumsSuccess(res.data)))
      .catch((error) => dispatch(setAlbumsFiled()));
  }, [page]);

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

      <Presentation title="New releases" type={"release"} albums={albums} />
    </>
  );
};
