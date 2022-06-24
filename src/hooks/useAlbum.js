import { useEffect, useState } from "react";

const endpoint = `${process.env.REACT_APP_API_BASE}/album`;

const useAlbum = (id) => {
  const [album, setAlbum] = useState();

  useEffect(() => {
    const request = fetch(`${endpoint}/${id}`);
    request
      .then((apiResponse) => {
        if (!apiResponse.ok) {
          console.error(apiResponse.statusText);
          return;
        }
        return apiResponse.json();
      })
      .then((apiResult) => {
        setAlbum(apiResult);
      });
  }, [id]);

  return album;
};

export default useAlbum;
