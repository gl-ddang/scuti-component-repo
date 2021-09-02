import React from "react";
import { storiesOf } from "@storybook/react";
import WarningLabelLong from "./WarningLabelLong.js";

const defaultState = {
  children: "Label",
  className: "",
};

storiesOf("Warning Label (Long)", module).add(
    "default",
    () => <WarningLabelLong {...defaultState} />,
    {
      design: {
        type: "figma",
        url:
          "https://www.figma.com/file/NGgKrdrHfd3wYBy6icn5eP/Scuti-Majoris?node-id=650%3A4105",
      },
    }
  );