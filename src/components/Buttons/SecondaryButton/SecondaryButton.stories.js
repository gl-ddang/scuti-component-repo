import React from "react";
import { storiesOf } from "@storybook/react";
import SecondaryButton from "./SecondaryButton.js";
import { colors } from "../../../Colors/Colors";

const defaultState = {
  children: "Secondary Btn",
  className: "",
  bgColor: `${colors.primary100}`,
  hover: "hover",
  active: "active",
  focus: "focus",
};

const disabled = {
  children: "Secondary Btn",
  className: "",
  bgColor: `${colors.primary100}`,
  hover: "hover",
  active: "active",
  focus: "focus",
  disabled: "disabled",
};

storiesOf("Secondary Buttons", module).add(
  "default",
  () => <SecondaryButton {...defaultState} />,
  {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/NGgKrdrHfd3wYBy6icn5eP/Scuti-Majoris?node-id=324%3A4158",
    },
  }
).add("disabled", () => <SecondaryButton {...disabled} />, {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/NGgKrdrHfd3wYBy6icn5eP/Scuti-Majoris?node-id=339%3A4222",
    },
});
