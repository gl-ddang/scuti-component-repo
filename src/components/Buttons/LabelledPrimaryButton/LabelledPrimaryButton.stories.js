import React from "react";
import { storiesOf } from "@storybook/react";
import LabelledPrimaryButton from "./LabelledPrimaryButton.js";
import { colors } from "../../../Colors/Colors";

const defaultState = {
  children: "Primary Btn",
  className: "",
};

storiesOf("Labelled Primary Button", module).add("default", () => (
  <LabelledPrimaryButton {...defaultState} />
));
