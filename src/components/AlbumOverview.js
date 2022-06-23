import { Grid } from "@material-ui/core";
import AlbumCard from "./AlbumCard";
import useAlbums from "../hooks/useAlbums";

const AlbumOverview = () => {
  const albums = useAlbums();
  // const albums = [
  //   {
  //     id: 1,
  //     name: "First Class",
  //     artist: "Jack Harlow",
  //     imageUrl: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.top40.nl%2Fmedia%2Fcache%2Frelated%2Fuploads%2Ftitle%2F163131%2F2242036840580904375.jpg&imgrefurl=https%3A%2F%2Fwww.top40.nl%2Fjack-harlow-1%2Ffirst-class-39043&tbnid=1atnvxZNdnXTLM&vet=12ahUKEwimhva6_sL4AhWEHuwKHWK1BxgQMygAegUIARCcAQ..i&docid=NziA6lO5waAkyM&w=540&h=540&q=first%20class%20jack%20harlow&ved=2ahUKEwimhva6_sL4AhWEHuwKHWK1BxgQMygAegUIARCcAQ",
  //   },
  //   {
  //     id: 1,
  //     name: "First Class",
  //     artist: "Jack Harlow",
  //     imageUrl: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.top40.nl%2Fmedia%2Fcache%2Frelated%2Fuploads%2Ftitle%2F163131%2F2242036840580904375.jpg&imgrefurl=https%3A%2F%2Fwww.top40.nl%2Fjack-harlow-1%2Ffirst-class-39043&tbnid=1atnvxZNdnXTLM&vet=12ahUKEwimhva6_sL4AhWEHuwKHWK1BxgQMygAegUIARCcAQ..i&docid=NziA6lO5waAkyM&w=540&h=540&q=first%20class%20jack%20harlow&ved=2ahUKEwimhva6_sL4AhWEHuwKHWK1BxgQMygAegUIARCcAQ",
  //   },
  // ];

  return (
    <Grid container spacing={2}>
      {albums.map((album) => (
        <Grid item xs={6} sm={8} md={8} key={album.id}>
          <AlbumCard {...album} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AlbumOverview;
