import React from "react";
import { storiesOf } from "@storybook/react";
import SuccessLabelLong from "./SuccessLabelLong.js";

const defaultState = {
  children: "Label",
  className: "",
};

storiesOf("Success Label (Long)", module).add(
    "default",
    () => <SuccessLabelLong {...defaultState} />,
    {
      design: {
        type: "figma",
        url:
          "https://www.figma.com/file/NGgKrdrHfd3wYBy6icn5eP/Scuti-Majoris?node-id=650%3A4112",
      },
    }
  );