import React from "react";
import { storiesOf } from "@storybook/react";
import WarningLabel from "./WarningLabel.js";

const defaultState = {
  children: "Label",
  className: "",
};

storiesOf("Warning Label", module).add(
    "default",
    () => <WarningLabel {...defaultState} />,
    {
      design: {
        type: "figma",
        url:
          "https://www.figma.com/file/NGgKrdrHfd3wYBy6icn5eP/Scuti-Majoris?node-id=619%3A4087",
      },
    }
  );