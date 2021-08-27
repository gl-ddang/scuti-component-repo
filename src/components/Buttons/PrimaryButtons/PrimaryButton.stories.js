import React from "react";
import { storiesOf } from "@storybook/react";
import PrimaryButton from "./PrimaryButton.js";
import { colors } from "../../../Colors/Colors";

const primaryDefaultButton = {
  children: "Primary Btn",
  className: "",
  bgColor: `${colors.neutral100}`,
  fontColor: `${colors.text}`,
  hover: "hover",
  active: "active",
  focus: "focus",
};

const successDefaultButton = {
  children: "Primary Btn",
  className: "",
  bgColor: `${colors.success100}`,
  bgColorSecondary: `${colors.success200}`,
  bgColorActive: `${colors.success300}`,
  fontColor: `${colors.textInverted}`,
  hover: "hover",
  active: "active",
  focus: "focus",
};

const errorDefaultButton = {
  children: "Primary Btn",
  className: "",
  bgColor: `${colors.error100}`,
  bgColorSecondary: `${colors.error200}`,
  bgColorActive: `${colors.error300}`,
  fontColor: `${colors.textInverted}`,
  hover: "hover",
  active: "active",
  focus: "focus",
};

const warningDefaultButton = {
  children: "Primary Btn",
  className: "",
  bgColor: `${colors.warning100}`,
  bgColorSecondary: `${colors.warning200}`,
  bgColorActive: `${colors.warning300}`,
  fontColor: `${colors.textInverted}`,
  hover: "hover",
  active: "active",
  focus: "focus",
};

const disabledDefaultButton = {
  children: "Primary Btn",
  className: "",
  disabled: "disabled",
};

storiesOf("Primary Buttons", module)
  .add("primary", () => <PrimaryButton {...primaryDefaultButton} />, {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/NGgKrdrHfd3wYBy6icn5eP/Scuti-Majoris?node-id=294%3A4009",
    },
  })
  .add("success", () => <PrimaryButton {...successDefaultButton} />, {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/NGgKrdrHfd3wYBy6icn5eP/Scuti-Majoris?node-id=294%3A4078",
    },
  })
  .add("error", () => <PrimaryButton {...errorDefaultButton} />, {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/NGgKrdrHfd3wYBy6icn5eP/Scuti-Majoris?node-id=294%3A4055",
    },
  })
  .add("warning", () => <PrimaryButton {...warningDefaultButton} />, {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/NGgKrdrHfd3wYBy6icn5eP/Scuti-Majoris?node-id=294%3A4032",
    },
  })
  .add("disabled", () => <PrimaryButton {...disabledDefaultButton} />, {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/NGgKrdrHfd3wYBy6icn5eP/Scuti-Majoris?node-id=294%3A4157",
    },
  });
