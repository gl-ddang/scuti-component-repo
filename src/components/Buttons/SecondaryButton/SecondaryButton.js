import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../../Colors/Colors";

const Button = styled.button`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "black")};
  color: ${colors.textInverted};
  font-family: "Arial";
  width: 145px;
  height: 35px;
  border: 1px solid white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    text-decoration: ${(props) => (props.hover ? "underline" : "none")};
  }

  &:active {
    text-decoration: ${(props) => (props.active ? "underline" : "none")};
    font-weight: ${(props) => (props.active ? "bold" : "none")};
  }

  &:focus {
    outline: white 1px solid;
    outline-offset: 4px;
  }

  &:disabled {
      color: ${colors.neutral400};
      text-decoration: none;
      border-color: ${colors.neutral400};
  }
`;

export const SecondaryButton = ({
  children,
  className,
  bgColor,
  hover,
  active,
  focus,
  disabled
}) => {
  return (
    <Button
      className={className}
      bgColor={bgColor}
      hover={hover}
      active={active}
      focus={focus}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
