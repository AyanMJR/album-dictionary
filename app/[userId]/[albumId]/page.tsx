import PhotosList from "@/app/components/Templates/PhotosList";
import { fetchPhotos } from "@/app/lib/api";
import { filterPhtosById } from "@/app/lib/utils";

export default async function Photos({ params }: { params: { albumId: string } }) {
  const { albumId } = params;
  const photos = await fetchPhotos();
  const _filteredPhotos = filterPhtosById(photos, Number(albumId));

  if (_filteredPhotos.length === 0) {
    return (
      <div>No photos found</div>
    )
  }

  return (
    <PhotosList photos={_filteredPhotos} />
  )
}