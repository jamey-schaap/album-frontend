import { Card, CardHeader, CardMedia } from '@material-ui/core';

const AlbumCard = ({ id, name, artist, imageUrl }) => {
  return (
    <Card>
      <CardHeader>
        id={id} title={name} subheader={artist}
      </CardHeader>
      <CardMedia>{imageUrl}</CardMedia>
    </Card>
  );
};

export default AlbumCard;