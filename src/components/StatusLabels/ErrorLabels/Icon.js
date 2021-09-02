import React from "react";
import ellipse from "./redEllipse.svg";
import styled from "styled-components";

export const StyledIcon = styled.img`
  float: left;
  position: relative;
  top: 2px;
  left: 5px;
`;

export default function Icon() {
  return <StyledIcon src={ellipse} alt="redEllipse"></StyledIcon>;
}
