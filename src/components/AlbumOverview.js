import { Box, Card, CardActionArea, CardHeader, Grid } from "@material-ui/core";
import AlbumCard from "./AlbumCard";
import useAlbums from "../hooks/useAlbums";
import { Link } from "react-router-dom";

const cardStyle = {
  Card: {
    margin: "auto",
    height: "100%",
  },
  Header: {},
  Media: {
    width: "100%",
    objectFit: "cover",
  },
};

const AlbumOverview = () => {
  const albums = useAlbums();

  return (
    <Box sx={{ minWidth: 275 }}>
      <Grid container spacing={2}>
        {albums.map((album) => (
          <Grid item xs={10} sm={2} md={2} key={album.id}>
            {album && <AlbumCard {...album} cardStyle={cardStyle} />}
          </Grid>
        ))}

        <Grid item xs={10} sm={2} md={2}>
          <Card style={cardStyle.Card}>
            <Link to="/new/" style={{ textDecoration: "none", color: "black" }}>
              <CardActionArea style={cardStyle.Card}>
                <CardHeader title={"+"} />
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AlbumOverview;
