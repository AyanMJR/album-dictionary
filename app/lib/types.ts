export interface User {
  id: number,
  name: string,
  email: string,
  phone: string,
  website: string,
}

export interface Album {
  userId: number,
  id: number,
  title: string
}

export interface Photo {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}