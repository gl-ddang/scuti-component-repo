import React from "react";
import { storiesOf } from "@storybook/react";
import SuccessLabel from "./SuccessLabel.js";

const defaultState = {
  children: "Label",
  className: "",
};

storiesOf("Success Label", module).add(
    "default",
    () => <SuccessLabel {...defaultState} />,
    {
      design: {
        type: "figma",
        url:
          "https://www.figma.com/file/NGgKrdrHfd3wYBy6icn5eP/Scuti-Majoris?node-id=557%3A4331",
      },
    }
  );