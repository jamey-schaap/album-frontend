import { Link } from "react-router-dom";
import AlbumCard from "./AlbumCard";
import useAlbum from "../hooks/useAlbums";

const AlbumDetail = () => {
  const album = useAlbum();
  return (
    <div>
      <Link to={`/album/`}></Link>
      <AlbumCard {...album}/>
    </div>
  )
};

export default AlbumDetail;