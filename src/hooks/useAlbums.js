import { useEffect, useState } from "react";

const endpoint = `${process.env.REACT_APP_API_BASE}/api/album`;

const useAlbums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const request = fetch(endpoint);

    request
      .then((apiRepsone) => {
        if (!apiRepsone.ok) {
          console.error(apiRepsone.statusText);
        }

        return apiRepsone.json();
      })
      .then((apiResult) => {
        setAlbums(apiResult);
      });
  });

  return albums;
};

export default useAlbums;