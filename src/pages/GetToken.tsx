import React, {useEffect} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {GetAccessToken} from "../services";
import {AsyncThunkAction} from "@reduxjs/toolkit";
import {useHistory} from "react-router-dom";

const Element = styled.div`
  display: flex;

  color: white;
  font-size: small;
`;

export const GetToken = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {isAuthenticated, isLoading, error} = useSelector(
    (state: RootState) => state.token
  );

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/board");
    }
  }, [isAuthenticated]);

  return (
    <>
      {isLoading && <div className="app-spinner"></div>}

      {error && (
        <p>
          Hubo un error al intentar obtener el access token, vualva a intentarlo por
          favor.
        </p>
      )}

      <button
        type="button"
        // @ts-ignore
        onClick={() => dispatch(GetAccessToken())}
        className="relative inline-block px-6 py-2.5 bg-neutral text-customText font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
      >
        Haga clic para obtener token
      </button>
    </>
  );
};
