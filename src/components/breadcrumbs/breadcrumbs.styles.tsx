import styled from "styled-components";

export const BreadcrumbWrapper = styled(`div`)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const InactiveBreadcrumb = styled(`p`)`
  font-size: 0.9rem;
  opacity: 0.5;
`;

export const ActiveBreadcrumb = styled("a")`
  cursor: pointer;
  height: 100%;
  font-size: 0.9rem;
`;
