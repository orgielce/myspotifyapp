import React, {useEffect} from "react";
import {Presentation} from "../components/Presentation";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {GetNewReleases} from "../services/release.service";

export const MainView = () => {
  const dispatch = useDispatch();
  const {albums, isLoading, error} = useSelector((state: RootState) => state.releases);

  useEffect(() => {
    // @ts-ignore
    dispatch(GetNewReleases());
  }, []);

  return (
    <>
      {isLoading && <div className="app-spinner"></div>}

      {error && (
        <p className="text-customText font-bold">
          No fue posible cargar los nuevos lanzamientos, vualva a intentarlo por favor.
        </p>
      )}

      <Presentation title="New releases" type={"release"} albums={albums} />
    </>
  );
};
