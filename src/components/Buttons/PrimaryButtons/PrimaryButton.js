import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../../Colors/Colors";

// TODO: change the font 
const Button = styled.button`
  background-color: ${(props) => props.bgColor ? props.bgColor : `${colors.neutral100}`};
  color: ${(props) => props.fontColor};
  font-family: Arial; 
  width: 124px;
  height: 35px;
  border: none;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    text-decoration: ${(props) => (props.hover ? "underline" : "none")};
    background-color: ${props => props.bgColorSecondary};
  }

  &:active {
    text-decoration: ${(props) => (props.active ? "underline" : "none")};
    font-weight: ${(props) => (props.active ? "bold" : "none")};
    background-color: '${props => props.bgColorActive};'
  }

  &:focus {
    outline: ${(props) => (props.focus) ? props.bgColor : "transparent"} 1px solid;
    outline-offset: 4px;
    background-color: ${props => props.bgColorSecondary};
  }

  &:disabled {
    text-decoration: none;
    font-weight: normal;
    background-color: ${colors.neutral400};
    color: ${colors.textInverted};
  }
`;

export const PrimaryButton = ({
  children,
  className,
  bgColor,
  bgColorActive,
  bgColorSecondary,
  fontColor,
  hover,
  active,
  focus,
  disabled
}) => {
  return (
    <Button
      className={className}
      bgColor={bgColor}
      bgColorActive={bgColorActive}
      bgColorSecondary={bgColorSecondary}
      fontColor={fontColor}
      hover={hover}
      active={active}
      focus={focus}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
