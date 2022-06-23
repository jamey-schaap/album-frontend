import { Card, CardHeader, CardMedia } from "@material-ui/core";

const AlbumCard = ({ id, name, artist, imageUrl }) => {
  return (
    <Card>
      <CardHeader>
        id={id} title={name} subheader={artist}
      </CardHeader>
      <CardMedia>
        {imageUrl}
        <p>Artist: {artist}</p>
        <p>Album: {name}</p>
      </CardMedia>
    </Card>
  );
};

export default AlbumCard;
