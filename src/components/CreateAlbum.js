import { Navigate, useNavigate } from "react-router-dom";
import AlbumForm from "./AlbumForm";

const endpoint = `${process.env.REACT_APP_API_BASE}/album`;

const CreateAlbum = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (newAlbum) => {
    const request = fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(newAlbum),
      headers: { "Content-Type": "application/json" },
    });
  
    request.then((response) => {
      if (!response.ok) {
        console.error(response.statusText);
      } else {
        navigate("/album");
      }
    });
  };

  return <AlbumForm onSubmit={handleSubmit}/>;
};

export default CreateAlbum;
