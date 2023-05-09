import React from "react";
import {
  ActiveBreadcrumb,
  BreadcrumbWrapper,
  InactiveBreadcrumb,
} from "./breadcrumbs.styles";

type BreadcrumbsProps = {
  places: { name: string; url: string }[];
};

function Breadcrumbs({ places }: BreadcrumbsProps) {
  let breads = [{ name: "Homepage", url: "/" }, ...places];
  return (
    <BreadcrumbWrapper data-testid={`breadcrumb-wrapper`}>
      {breads.map((bread, index) => {
        return index + 1 === breads.length ? (
          <InactiveBreadcrumb key={`bread${bread.name}`}>
            {bread.name}
          </InactiveBreadcrumb>
        ) : (
          <ActiveBreadcrumb href={bread.url} key={`bread${bread.name}`}>
            {bread.name} |
          </ActiveBreadcrumb>
        );
      })}
    </BreadcrumbWrapper>
  );
}

export default Breadcrumbs;
