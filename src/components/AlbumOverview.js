import { Grid } from "@material-ui/core";
import AlbumCard from "./AlbumCard";
import useAlbums from "../hooks/useAlbums";

const AlbumOverview = () => {
  const albums = useAlbums();

  return (
    <Grid container spacing={2}>
      {albums.map((album) => (
        <Grid item xs={6} sm={4} md={4} key={album.id}>
          <AlbumCard {...album} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AlbumOverview;
