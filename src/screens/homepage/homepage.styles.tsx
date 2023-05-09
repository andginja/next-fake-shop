"use client";

import styled from "styled-components";
import * as colors from "@/styles/colors.js";
import * as mq from "@/styles/media-queries.js";

export const Layout = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2rem 8rem;
  ${mq.desktop} {
    padding: 1rem 4rem;
  }
  ${mq.laptop} {
    padding: 1rem 2rem;
  }
  ${mq.mediumBreakpoint} {
    flex-direction: column;
  }
`;
