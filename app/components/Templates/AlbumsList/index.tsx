'use client';

import { Album } from "@/app/lib/types";
import Link from 'next/link';
import Tiles from "@/app/components/Atoms/Tiles";
import Container from "@/app/components/Atoms/Container";
import AlbumIcon from "@/app/assets/album.svg";

type albumsListProps = {
  albums: Album[],
  userId: string
}

function AlbumsList({ albums, userId }: albumsListProps) {

  return (
    <Container>
      {albums.map(album => (
        <Link key={album.id} href={`/${userId}/${album.id}`} role="link">
          <Tiles icon={AlbumIcon}>{album.title}</Tiles>
        </Link>
      ))}
    </Container>
  )
}

export default AlbumsList;