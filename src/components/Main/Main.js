import { useEffect, useState } from "react";
import styled from "styled-components";

export const Main = () => {
  return (
    <>
      <GalleryStyled className="gallery">
        <GalleryCard className="gallery-card" id="card-1">
          <GalleryTitle>Animals</GalleryTitle>

          <GalleryBtn href="" className="gallery-btn">
            Mais Fotos
          </GalleryBtn>
        </GalleryCard>

        <GalleryCard className="gallery-card" id="card-2">
          <GalleryTitle>Architecture</GalleryTitle>

          <GalleryBtn href="" className="gallery-btn">
            Mais Fotos
          </GalleryBtn>
        </GalleryCard>

        <GalleryCard className="gallery-card" id="card-3">
          <GalleryTitle>Cities</GalleryTitle>

          <GalleryBtn href="" className="gallery-btn">
            Mais Fotos
          </GalleryBtn>
        </GalleryCard>

        <GalleryCard className="gallery-card" id="card-4">
          <GalleryTitle>Decorations</GalleryTitle>

          <GalleryBtn href="" className="gallery-btn">
            Mais Fotos
          </GalleryBtn>
        </GalleryCard>

        <GalleryCard className="gallery-card" id="card-5">
          <GalleryTitle>Sports</GalleryTitle>

          <GalleryBtn href="" className="gallery-btn">
            Mais Fotos
          </GalleryBtn>
        </GalleryCard>

        <GalleryCard className="gallery-card" id="card-6">
          <GalleryTitle>Nature</GalleryTitle>

          <GalleryBtn href="" className="gallery-btn">
            Mais Fotos
          </GalleryBtn>
        </GalleryCard>

        <GalleryCard className="gallery-card" id="card-7">
          <GalleryTitle>Landscape</GalleryTitle>

          <GalleryBtn href="" className="gallery-btn">
            Mais Fotos
          </GalleryBtn>
        </GalleryCard>

        <GalleryCard className="gallery-card" id="card-8">
          <GalleryTitle>People</GalleryTitle>

          <GalleryBtn href="" className="gallery-btn">
            Mais Fotos
          </GalleryBtn>
        </GalleryCard>

        <GalleryCard className="gallery-card" id="card-9">
          <GalleryTitle>Meals</GalleryTitle>

          <GalleryBtn href="" className="gallery-btn">
            Mais Fotos
          </GalleryBtn>
        </GalleryCard>
      </GalleryStyled>
      <footer>
        <p>
          <span>Gallery</span> © 2022
        </p>
      </footer>
    </>
  );
};
const GalleryStyled = styled("div")``;
const GalleryCard = styled("div")``;
const GalleryTitle = styled("h2")`
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 1rem;
`;
const GalleryBtn = styled("a")``;
