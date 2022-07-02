import React from "react";
import styled from "styled-components";
import SpotifyLogo from "../assets/Spotify_logo_with_text.svg";

const ImageContainer = styled.img`
  filter: brightness(100); // white
  margin: 5px 0px;
  width: 120px;
`;

export const Navbar = () => {
  return (
    <header>
      <nav className="bg-secondary border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-start mx-auto max-w-screen-xl">
          <ImageContainer src={SpotifyLogo} alt="SpotifyLogo" />
        </div>
      </nav>
    </header>
  );
};
