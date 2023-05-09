import styled from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import * as colors from "@/styles/colors.js";

export const StarsWrapper = styled(`div`)``;

export const StyledStars = styled(AiFillStar)`
  color: ${colors.brandPrimary};
`;

export const StyledOutlineStars = styled(AiOutlineStar)`
  color: ${colors.brandPrimary};
`;
