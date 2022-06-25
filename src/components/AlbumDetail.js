import { Button } from "@material-ui/core";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAlbum from "../hooks/useAlbum";
import AlbumForm from "./AlbumForm";

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

const endpoint = `${process.env.REACT_APP_API_BASE}/album`;

const AlbumDetail = () => {
  let { id } = useParams();
  const album = useAlbum(id);
  const navigate = useNavigate();
  
  const onRemove = (album) => {
    const request = fetch(`${endpoint}/${album.id}`, {
      method: "DELETE",
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

  const handleSubmit = (updatedAlbum) => {
    const request = fetch(`${endpoint}/${updatedAlbum.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedAlbum),
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

  return (
    <>
      {album && <AlbumForm album={album} onSubmit={handleSubmit} onRemove={onRemove} />}
      <br />
      <Link to="/album/" style={linkStyle}>
        <Button type="submit" variant="outlined">Back</Button>
      </Link>
    </>
  );
};

export default AlbumDetail;
