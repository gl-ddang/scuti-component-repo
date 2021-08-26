import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../../Colors/Colors";

const Button = styled.button`
  background-color: transparent;
  color: ${colors.textInverted};
  font-family: "Arial";
  width: 96px;
  height: 21px;
  text-align: center;
  text-decoration: none;
  font-size: 13.33px;

  &:hover {
    text-decoration: ${(props) => (props.hover ? "underline" : "none")};
  }

  &:active {
    text-decoration: ${(props) => (props.active ? "underline" : "none")};
    font-weight: ${(props) => (props.active ? "bold" : "none")};
  }

  &:disabled {
      color: ${colors.textInverted};
      text-decoration: none;
      background-color: ${colors.neutral400};
  }
`;

export const SmallPrimaryButton = ({
  children,
  className,
  hover,
  active,
  disabled
}) => {
  return (
    <Button
      className={className}
      hover={hover}
      active={active}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default SmallPrimaryButton;
