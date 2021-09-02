import React from "react";
import { storiesOf } from "@storybook/react";
import ErrorLabel from "./ErrorLabel.js";

const defaultState = {
  children: "Label",
  className: "",
};

storiesOf("Error Label", module).add(
    "default",
    () => <ErrorLabel {...defaultState} />,
    {
      design: {
        type: "figma",
        url:
          "https://www.figma.com/file/NGgKrdrHfd3wYBy6icn5eP/Scuti-Majoris?node-id=619%3A4096",
      },
    }
  );