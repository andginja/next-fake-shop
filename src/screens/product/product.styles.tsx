import { FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import * as mq from "@/styles/media-queries.js";
import * as colors from "@/styles/colors.js";

export const Layout = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 24rem;
  ${mq.desktop} {
    padding: 2rem 8rem;
  }
  ${mq.tabletPortrait} {
    padding: 2rem 4rem;
  }
`;

export const HeadingWrapper = styled(`div`)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export const StyledTitle = styled(`h2`)``;

export const StyledDescription = styled(`p`)`
  font-size: 1rem;
`;

export const StyledRating = styled(`p`)``;

export const RatingWrapper = styled(`div`)`
  display: flex;
  gap: 0.5rem;
`;

export const StarRatingWapper = styled(`div`)``;

export const RatingRate = styled(`p`)``;

export const ReviewNumberWrapper = styled(`div`)``;

export const ContentWrapper = styled(`div`)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const ImageWrapper = styled(`div`)`
  position: relative;
  width: 100%;
  height: 20rem;
  overflow: hidden;
  background-color: white;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1),
    0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 3px 6px -1px rgba(0, 0, 0, 0.04);
  cursor: pointer;

  :hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.05);
  }

  img {
    object-fit: contain;
    object-position: center;
    padding: 2rem;
  }
`;

export const PricingWrapper = styled(`div`)`
  display: flex;
  flex-direction: row;
  flex-wrap: 1;
  justify-content: end;
  gap: 1rem;
  align-items: center;
  ${mq.tabletPortrait} {
    flex-direction: column;
    justify-content: center;
  }
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

export const AddToCartButtonWrapper = styled(`div`)`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  padding-bottom: 1rem;
`;
