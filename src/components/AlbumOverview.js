import { Box, Card, CardActionArea, Grid } from "@material-ui/core";
import AlbumCard from "./AlbumCard";
import useAlbums from "../hooks/useAlbums";
import { Link } from "react-router-dom";

const AlbumOverview = () => {
  const albums = useAlbums();

  return (
    <Box sx={{ minWidth: 275 }}>
      <Grid container spacing={2}>
        {albums.map((album) => (
          <Grid item xs={6} sm={4} md={4} key={album.id}>
            <AlbumCard {...album} />
          </Grid>
        ))}
      </Grid>
      <br />
      <Link to="/new/">
        <Card xs={6} sm={4} md={4}>
          <CardActionArea>Create new album</CardActionArea>
        </Card>
      </Link>
    </Box>
  );
};

export default AlbumOverview;
