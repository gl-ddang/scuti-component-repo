import React from "react";
import { storiesOf } from "@storybook/react";
import TertiaryButton from "./TertiaryButton.js";

const defaultState = {
  children: "Tertiary Btn",
  className: "",
  hover: "hover",
  active: "active",
};

const disabled = {
  children: "Tertiary Btn",
  className: "",
  disabled: 'disabled'
};

storiesOf("Tertiary Buttons", module).add(
  "default",
  () => <TertiaryButton {...defaultState} />,
  {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/NGgKrdrHfd3wYBy6icn5eP/Scuti-Majoris?node-id=339%3A4198",
    },
  }
).add("disabled", () => <TertiaryButton {...disabled}/>, {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/NGgKrdrHfd3wYBy6icn5eP/Scuti-Majoris?node-id=339%3A4218"
    }
});
