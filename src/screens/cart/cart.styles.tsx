import styled from "styled-components";
import { ImCross } from "react-icons/im";
import * as mq from "@/styles/media-queries.js";
import * as colors from "@/styles/colors.js";
import { TbTrashOff } from "react-icons/tb";
export const Layout = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 24rem;
  ${mq.desktop} {
    padding: 4rem 4rem;
  }
  ${mq.laptop} {
    padding: 2rem 2rem;
  }
  ${mq.mediumBreakpoint} {
    flex-direction: column;
  }
`;

export const CardWrapper = styled("div")`
  position: relative;
  background-color: white;
  display: flex;

  width: 16rem;
  flex-direction: column;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    transition: 0.3s ease-in-out;
    transform: scale(1.02);
  }
  ${mq.mediumBreakpoint} {
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
  }
`;

export const ProductListWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  align-items: stretch;
  ${mq.mediumBreakpoint} {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled(`div`)`
  position: relative;
  width: 100%;
  height: 15rem;
  overflow: hidden;
  background-color: white;

  img {
    object-fit: contain;
    object-position: center;
    padding: 0.5rem;
  }

  ${mq.mediumBreakpoint} {
    height: 20rem;
  }
`;

export const ContentWrapper = styled(`div`)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
  text-align: center;
  gap: 0.5rem;
  height: 100%;
`;

export const StyledTitle = styled(`h2`)`
  font-size: 0.9rem;
`;

export const StyledDescription = styled(`p`)`
  font-size: 0.7rem;
`;

export const PricingWrapper = styled(`div`)``;

export const StyledPricer = styled("h2")``;

export const StyledRemoveItemIcon = styled(ImCross)`
  margin-top: 2rem;
  font-size: 1.5rem;
  align-self: center;
  cursor: pointer;
  &:hover {
    transition: 0.3s ease-in-out;
    transform: scale(1.1);
    color: red;
  }
  ${mq.mediumBreakpoint} {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const ResetCartWrapper = styled("div")`
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled("a")`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${colors.brandPrimary};
  color: ${colors.brandLight};
  cursor: pointer;
  width: 8rem;
  height: 3rem;
  font-size: 0.8rem;
  text-align: center;
  text-decoration: none;
  :hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
`;

export const StyledResetCart = styled(TbTrashOff)`
  font-size: 1rem;
  margin-right: 0.5rem;
`;
