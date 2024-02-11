import { Endpoints } from "./constants";

export async function fetchAlbums() {
  try {
    const response = await fetch(`${process.env.API_URL}/${Endpoints.albums}`);
    return response.json()
  } catch (error) {
    console.log('API failed', error)
    throw new Error('Failed to fetch album data')
  }
}

export async function fetchUsers() {
  try {
    const response = await fetch(`${process.env.API_URL}/${Endpoints.users}`);
    return response.json();
  } catch (error) {
    console.log('API failed', error)
    throw new Error('Failed to fetch user data')
  }
}

export async function fetchPhotos() {
  try {
    const response = await fetch(`${process.env.API_URL}/${Endpoints.photos}`);
    return response.json();
  } catch (error) {
    console.log('API failed', error)
    throw new Error('Failed to fetch photos data')
  }
}