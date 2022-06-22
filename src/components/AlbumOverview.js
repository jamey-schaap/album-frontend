import { Grid } from "@material-ui/core";
import AlbumCard from "./AlbumCard";
import useAlbums from "../hooks/useAlbums";

const AlbumOverview = () => {
  const albums = useAlbums();

  return (
    <Grid container spacing={3}>
      {albums.map((album) => (
        <Grid item xs={2} key={album.id}>
          <AlbumCard {...album} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AlbumOverview;
