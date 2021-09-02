import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../../Colors/Colors";

const Button = styled.button`
  background-color: ${colors.neutral100};
  color: ${colors.text};
  font-family: "Arial";
  width: 159px;
  height: 42px;
  text-align: center;
  text-decoration: none;
  font-size: 19.2px;

  &:hover {
    text-decoration: ${(props) => (props.hover ? "underline" : "none")};
  }

  &:active {
    text-decoration: ${(props) => (props.active ? "underline" : "none")};
    font-weight: ${(props) => (props.active ? "bold" : "none")};
  }

  &:focus {
    outline: ${colors.neutral100} 1px solid;
    outline-offset: 5px;
  }

  &:disabled {
    color: ${colors.textInverted};
    background-color: ${colors.neutral400};
  }
`;

export const LargePrimaryButton = ({
  children,
  className,
  hover,
  active,
  disabled,
  focus,
}) => {
  return (
    <Button
      className={className}
      hover={hover}
      active={active}
      disabled={disabled}
      focus={focus}
    >
      {children}
    </Button>
  );
};

export default LargePrimaryButton;
