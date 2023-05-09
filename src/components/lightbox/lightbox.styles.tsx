import styled from "styled-components";
import { GrClose } from "react-icons/gr";

export const LightboxWrapper = styled(`div`)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  background-color: white;
`;

export const CloseButton = styled(GrClose)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 6;
  font-size: 1.8rem;
  cursor: pointer;
  :hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.2);
  }
`;

export const ImageWrapper = styled(`div`)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 20rem;
  overflow: hidden;
  background-color: white;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  margin-top: 25vh;

  img {
    object-fit: contain;
    object-position: center;
    padding: 2rem;
  }
`;
