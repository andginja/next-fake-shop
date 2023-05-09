import React from "react";
import { LoadingWrapper } from "./spinner.styles";
import { ScaleLoader } from "react-spinners";
import * as colors from "@/styles/colors.js";

function Spinner() {
  return (
    <LoadingWrapper data-testid={`spinner`}>
      <ScaleLoader color={colors.brandPrimary} />
    </LoadingWrapper>
  );
}

export default Spinner;
