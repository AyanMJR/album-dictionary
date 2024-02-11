import { Album, Photo } from "./types";

export const filterAlbumsById = (albums: Album[], userId: number) => {
  return albums.filter(album => album.userId === userId)
}

export const filterPhtosById = (photos: Photo[], albumId: number) => {
  return photos.filter(photo => photo.albumId === albumId);
}