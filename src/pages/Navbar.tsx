import React, {useCallback, useEffect} from "react";
import styled from "styled-components";
import SpotifyLogo from "../assets/Spotify_logo_with_text.svg";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import debounce from "lodash.debounce";
import {
  setArtistsBegin,
  setArtistsFiled,
  setArtistsSuccess,
  setFilter,
} from "../redux/reducers/artistsSlice";
import axios from "axios";
import {BASE_APP_URL} from "../utilities/constants";
import {Token} from "../models";
import {setCurrentPage, setDataType} from "../redux/reducers/tokenSlice";
import {
  setTracksBegin,
  setTracksFiled,
  setTracksFilter,
  setTracksSuccess,
} from "../redux/reducers/tracksSlice";
import {Link} from "react-router-dom";

const ImageContainer = styled.img`
  filter: brightness(100); // white
  margin: 5px 0px;
  width: 120px;
`;

export const Navbar = () => {
  const dispatch = useDispatch();
  const {isAuthenticated, loadDataFrom, page} = useSelector(
    (state: RootState) => state.token
  );

  useEffect(() => {
    console.log("Clear filters");
  }, [loadDataFrom]);

  const fetchData = (type: string, filter: string, page: Token["page"]) => {
    dispatch(setDataType({loadDataFrom: type === "artist" ? "artists" : "track"}));
    dispatch(setCurrentPage({page: 10}));
    if (type === "artist") {
      dispatch(setArtistsBegin());
      axios(
        `${BASE_APP_URL}/search?q=${type}%3A${filter}&type=${type}&limit=14&offset=${page}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => dispatch(setArtistsSuccess(res.data)))
        .catch((error) => dispatch(setArtistsFiled()));
    } else if (type === "track") {
      dispatch(setTracksBegin());
      axios(
        `${BASE_APP_URL}/search?q=${type}%3A${filter}&type=${type}&limit=14&offset=${page}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => dispatch(setTracksSuccess(res.data)))
        .catch((error) => dispatch(setTracksFiled()));
    }
  };

  const fetchArtists = (event: any) => {
    const filter = event.target.value;
    dispatch(setFilter(filter));
    fetchData("artist", filter, page);
  };

  const fetchTracks = (event: any) => {
    const filter = event.target.value;
    dispatch(setTracksFilter(filter));
    fetchData("track", filter, page);
  };

  const debouncedArtistsChangeHandler = useCallback(debounce(fetchArtists, 500), []);
  const debouncedTracksChangeHandler = useCallback(debounce(fetchTracks, 500), []);

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-secondary border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap items-start">
          <Link to="/logo">
            <ImageContainer src={SpotifyLogo} alt="SpotifyLogo" />
          </Link>
          <div className="flex items-center ml-20">
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-customText dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
                </svg>
              </div>
              <input
                type="text"
                onChange={debouncedArtistsChangeHandler}
                className="w-80 bg-neutral border-none text-customText placeholder-customText text-sm rounded block w-full pl-10 p-2.5 hover:border-none focus:border-none"
                placeholder="Buscar Artista"
              />
            </div>
          </div>
          <div className="flex items-center ml-20">
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-customText dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
                </svg>
              </div>
              <input
                type="text"
                onChange={debouncedTracksChangeHandler}
                className="w-80 bg-neutral border-none text-customText placeholder-customText text-sm rounded block w-full pl-10 p-2.5 hover:border-none focus:border-none"
                placeholder="Buscar Canción"
              />
            </div>
          </div>
          <div className="ml-20 text-customText py-2">
            {isAuthenticated ? "Hola, Orgiel" : ""}
          </div>
        </div>
      </nav>
    </header>
  );
};
