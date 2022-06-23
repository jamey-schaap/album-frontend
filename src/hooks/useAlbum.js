import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const endpoint = `${process.env.REACT_APP_API_BASE}/album`;

const useAlbum = () => {
  const [album, setAlbum] = useState([]);
  const [id, setId] = useState([]);
  setId(useParams());

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
  }, []);

  return album;
};

export default useAlbum;
