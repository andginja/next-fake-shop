import styled from "styled-components";
import * as colors from "@/styles/colors.js";
import { FaCartPlus } from "react-icons/fa";

export const CardWrapper = styled("div")`
  position: relative;
  background-color: white;
  display: flex;

  width: 24rem;
  flex-direction: column;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    transition: 0.3s ease-in-out;
    transform: scale(1.02);
  }
`;

export const ImageWrapper = styled(`div`)`
  position: relative;
  width: 100%;
  height: 20rem;
  overflow: hidden;
  background-color: white;

  img {
    object-fit: contain;
    object-position: center;
    padding: 2rem;
  }
`;

export const ContentWrapper = styled(`div`)`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  text-align: justify;
  gap: 0.5rem;
  height: 100%;
`;

export const StyledTitle = styled(`h2`)``;

export const StyledDescription = styled(`p`)`
  font-size: 0.9rem;
`;

export const StyledRating = styled(`p`)``;

export const RatingWrapper = styled(`div`)`
  display: flex;
  gap: 0.5rem;
`;

export const StarRatingWapper = styled(`div`)``;

export const RatingRate = styled(`p`)``;

export const ReviewNumberWrapper = styled(`div`)``;

export const PricingWrapper = styled(`div`)``;

export const StyledPricer = styled("h2")``;

export const AddToCartButtonWrapper = styled(`div`)`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  align-items: center;
  padding-bottom: 1rem;
`;
export const AnchorWrapper = styled(`div`)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StyledAnchor = styled("a")`
  cursor: pointer;
  height: 100%;
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

export const StyledCart = styled(FaCartPlus)`
  color: ${colors.brandLight};
  font-size: 1.2rem;
  margin-right: 0.5rem;
`;
