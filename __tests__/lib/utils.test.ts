import { filterAlbumsById, filterPhtosById } from "@/app/lib/utils";

describe('Utils', () => {
  it('should filter albums by user id', () => {
    const albums = [
      {
        "userId": 1,
        "id": 1,
        "title": "quidem molestiae enim"
      },
      {
        "userId": 2,
        "id": 2,
        "title": "sunt qui excepturi placeat culpa"
      },
      {
        "userId": 3,
        "id": 3,
        "title": "omnis laborum odio"
      }
    ];
    const userId = 1;
    const filteredAlbums = filterAlbumsById(albums, userId);
    expect(filteredAlbums).toHaveLength(1);
  })

  it('should filter photos by album Id', () => {
    const photos = [
      {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
      },
      {
        "albumId": 2,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
      },
      {
        "albumId": 3,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
      }
    ];

    const albumId = 4;
    const filteredPhotos = filterPhtosById(photos, albumId);
    expect(filteredPhotos).toHaveLength(0);
  })
})
