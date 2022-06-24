import { Button, Card } from "@material-ui/core";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import useAlbum from "../hooks/useAlbum";
import AlbumForm from "./AlbumForm";

const endpoint = `${process.env.REACT_APP_API_BASE}/album`;

const AlbumDetail = () => {
  let { id } = useParams();
  const album = useAlbum(id);
  const navigate = useNavigate();
  
  const onRemove = (album) => {
    console.log(album.id);
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

  return (
    <>
      {album && <AlbumForm album={album} onRemove={onRemove} />}
      <Link to="/album/">
        <Button type="submit">Back</Button>
      </Link>
    </>
  );
};

export default AlbumDetail;
