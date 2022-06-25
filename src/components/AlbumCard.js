import { Card, CardHeader, CardMedia } from "@material-ui/core";
import { Link } from "react-router-dom";

const AlbumCard = ({ id, name, artist, imageUrl, cardStyle }) => {
  return (
    <Card variant="outlined" style={cardStyle.Card}>
      <CardHeader title={`${name} by ${artist}`} style={cardStyle.Header} />
      <CardMedia>
        <Link to={`/album/${id}`}>
          <img
            src={imageUrl}
            style={cardStyle.Media}
            alt={`Album cover of ${name} by ${artist}`}
          />
        </Link>
      </CardMedia>
    </Card>
  );
};

export default AlbumCard;
