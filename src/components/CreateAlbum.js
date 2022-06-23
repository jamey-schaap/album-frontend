import { Navigate } from "react-router-dom";
import AlbumForm from "./AlbumForm";

const endpoint = `${process.env.REACT_APP_API_BASE}/album`;

const handleSubmit = (newAlbum) => {
  console.log(newAlbum);

  const request = fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(newAlbum),
    headers: { "Content-Type": "application/json" },
  });

  request.then((response) => {
    if (!response.ok) {
      console.error(response.statusText);
    } else {
      Navigate("/");
    }
  });
};

const CreateAlbum = () => {
  return <AlbumForm onSubmit={handleSubmit}/>;
};

export default CreateAlbum;
