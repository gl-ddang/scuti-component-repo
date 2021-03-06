import React from "react";
import icon from "./icon-default-button.svg";

import styled from "styled-components";

export const StyledIcon = styled.img`
  float: left;
  position: relative;
  top: -5px;
`;

export default function Icon() {
  return <StyledIcon src={icon} alt="iconImage"></StyledIcon>;
}
