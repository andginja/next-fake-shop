import React from "react";
import { LightboxWrapper, CloseButton, ImageWrapper } from "./lightbox.styles";
import Image from "next/image";

type LightboxProps = {
  url: string;
  closeLightbox: () => void;
};

function Lightbox({ url, closeLightbox }: LightboxProps) {
  return (
    <LightboxWrapper>
      <ImageWrapper>
        <Image src={url} alt={`product image`} fill />
      </ImageWrapper>
      <CloseButton onClick={closeLightbox} />
    </LightboxWrapper>
  );
}

export default Lightbox;
