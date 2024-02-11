'use client';

import { Photo } from "@/app/lib/types";
import Tiles from "@/app/components/Atoms/Tiles";
import Container from "@/app/components/Atoms/Container";


type photosListProps = {
  photos: Photo[]
}

function PhotosList({ photos }: photosListProps) {

  return (
    <Container>
      {photos.map(photo => (
        <Tiles icon={photo.thumbnailUrl} key={photo.id}>{photo.title}</Tiles>
      ))}
    </Container>
  )
}

export default PhotosList;