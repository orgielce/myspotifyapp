import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const SpanContainer = styled.span`
  color: white !important;
  transition: all 0.5s ease-out;
  &:hover {
    cursor: pointer;
    font-size: 30px;
  }
`;

export const NotFoundPage = () => {
  return (
    <div className="grid h-full place-items-center">
      <div className="text-white text-9xl font-bold">404!</div>
      <div className="text-neutral text-2xl font-bold -mt-96">
        Ruta no encontrada, para regresar al inicio haga clic
        <SpanContainer>
          {" "}
          <Link to="/">
            <u>aquí</u>
          </Link>{" "}
        </SpanContainer>
      </div>
    </div>
  );
};
