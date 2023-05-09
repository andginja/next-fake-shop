import React from "react";
import {
  StarsWrapper,
  StyledOutlineStars,
  StyledStars,
} from "./star-ratings.styles";

type StarRatingProps = {
  rating: number;
};

function StarRatings({ rating }: StarRatingProps) {
  const roundedRating = Math.floor(rating);

  return (
    <StarsWrapper>
      {Array.from({ length: 5 }, (_, index) =>
        index < roundedRating ? (
          <StyledStars key={`star${index}`} />
        ) : (
          <StyledOutlineStars key={`star${index}`} />
        )
      )}
    </StarsWrapper>
  );
}

export default StarRatings;
