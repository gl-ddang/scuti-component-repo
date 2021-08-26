import React from "react";
import { storiesOf } from "@storybook/react";
import SmallPrimaryButton from "./SmallPrimaryButton.js";

const defaultState = {
  children: "Primary Btn",
  className: "",
  hover: "hover",
  active: "active",
};

const disabled = {
  children: "Primary Btn",
  className: "",
  disabled: 'disabled'
};

storiesOf("Small Primary Buttons", module).add(
  "default",
  () => <SmallPrimaryButton {...defaultState} />,
  {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/NGgKrdrHfd3wYBy6icn5eP/Scuti-Majoris?node-id=399%3A4290",
    },
  }
).add("disabled", () => <SmallPrimaryButton {...disabled}/>, {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/NGgKrdrHfd3wYBy6icn5eP/Scuti-Majoris?node-id=399%3A4323"
    }
});
