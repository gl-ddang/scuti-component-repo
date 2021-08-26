import React from "react";
import { storiesOf } from "@storybook/react";
import LargePrimaryButton from "./LargePrimaryButton.js";

const defaultState = {
  children: "Primary Btn",
  className: "",
  hover: "hover",
  active: "active",
  focus: "focus",
};

const disabled = {
  children: "Primary Btn",
  className: "",
  disabled: 'disabled'
};

storiesOf("Large Primary Buttons", module).add(
  "default",
  () => <LargePrimaryButton {...defaultState} />,
  {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/NGgKrdrHfd3wYBy6icn5eP/Scuti-Majoris?node-id=339%3A4228",
    },
  }
).add("disabled", () => <LargePrimaryButton {...disabled}/>, {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/NGgKrdrHfd3wYBy6icn5eP/Scuti-Majoris?node-id=339%3A4273"
    }
});
