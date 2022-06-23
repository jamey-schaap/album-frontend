import { Button, Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import useAlbum from "../hooks/useAlbum";
import AlbumForm from "./AlbumForm";

const AlbumDetail = () => {
  const album = useAlbum();

  return (
    <Card>
      <AlbumForm album={album} />
      <Link to="/album/"><Button type="submit">Back</Button></Link>
    </Card>
  );
};

export default AlbumDetail;
