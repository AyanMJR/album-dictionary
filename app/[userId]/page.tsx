import { fetchAlbums } from "@/app/lib/api";
import { filterAlbumsById } from "../lib/utils";
import AlbumsList from "@/app/components/Templates/AlbumsList";

export default async function Albums({ params }: { params: { userId: string } }) {
  const albums = await fetchAlbums();
  const _filteredAlbums = filterAlbumsById(albums, Number(params.userId));

  if (_filteredAlbums.length === 0) {
    return (
      <div>No albums found</div>
    )
  }

  return (
    <AlbumsList albums={_filteredAlbums} userId={params.userId} />
  )
}