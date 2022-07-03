import React from "react";
import styled from "styled-components";
import SpotifyLogo from "../assets/Spotify_logo_with_text.svg";

const ImageContainer = styled.img`
  filter: brightness(100); // white
  margin: 5px 0px;
  width: 120px;
`;

export const Navbar = () => {
  const searchHandler = (e: any) => console.log(e.target.value);

  return (
    <header>
      <nav className="bg-secondary border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap items-start">
          <ImageContainer src={SpotifyLogo} alt="SpotifyLogo" />
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
                className="w-80 bg-neutral border-none text-customText placeholder-customText text-sm rounded block w-full pl-10 p-2.5 hover:border-none focus:border-none"
                placeholder="Buscar Canción"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
