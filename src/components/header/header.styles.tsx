import styled from "styled-components";
import * as colors from "@/styles/colors.js";
import * as design from "@/styles/design.js";
import * as mq from "@/styles/media-queries.js";

export const HeaderWrapper = styled("div")`
  position: fixed;
  top: 0;
  z-index: 5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.brandPrimary};
  color: ${colors.brandLight};
  width: 100%;
  padding: 1rem ${design.layout.xl};
  ${mq.desktop} {
    padding: 1rem 4rem;
  }
  ${mq.laptop} {
    padding: 1rem 2rem;
  }
`;

export const StyledAnchor = styled("a")`
  cursor: pointer;
  height: 100%;
`;
