import { Card, CardHeader, CardMedia } from "@material-ui/core";
import { Link } from "react-router-dom";

const AlbumCard = ({ id, name, artist, imageUrl }) => {
  return (
    <Card variant="outlined">
      <CardHeader>
        id={id} title={name} subheader={artist}
      </CardHeader>
      <CardMedia>
        {name} by {artist} 
        <br />
        <Link to={`/album/${id}`}>
          <img
            src={imageUrl}
            width={200}
            height={200}
            alt={`${name} of ${artist}`}
          />
        </Link>
      </CardMedia>
    </Card>
  );
};

export default AlbumCard;
