import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {GetAccessToken} from "../services";
import {useHistory} from "react-router-dom";

export const GetToken = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {isAuthenticated, isLoading, error} = useSelector(
    (state: RootState) => state.token
  );

  useEffect(() => {
    // @ts-ignore
    dispatch(GetAccessToken());
    if (isAuthenticated) {
      history.push("/board");
    }
  }, [isAuthenticated]);

  return (
    <>
      {isLoading && <div className="app-spinner"></div>}

      {error && (
        <p className="text-customText font-bold">
          Hubo un error al intentar obtener el access token, vualva a intentarlo por
          favor.
        </p>
      )}

      <button
        type="button"
        className="relative inline-block px-6 py-2.5 bg-neutral text-customText font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
      >
        Haga clic para obtener token
      </button>
    </>
  );
};
