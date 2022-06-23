import { Box, Button, Card, CardContent, TextField } from "@material-ui/core";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Navigate } from "react-router-dom";

const AlbumForm = ({ album, onSubmit }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: album
      ? album
      : {
          name: "",
          artist: "",
          imageUrl: "",
        },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardContent>
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ album }) => (
              <TextField
                label="Name"
                variant="outlined"
                {...album}
                margin="normal"
                fullWidth
              />
            )}
            margin="normal"
          />
          <Controller
            name="artist"
            control={control}
            rules={{ required: true }}
            render={({ album }) => (
              <TextField
                label="Artist"
                variant="outlined"
                {...album}
                margin="normal"
                fullWidth
              />
            )}
            margin="normal"
          />
          <Controller
            name="image url"
            control={control}
            rules={{ required: true }}
            render={({ album }) => (
              <TextField
                label="Image URL"
                variant="outlined"
                {...album}
                margin="normal"
                fullWidth
              />
            )}
            margin="normal"
          />
          <Button type="submit">Save </Button>
        </CardContent>
      </Card>
    </form>
  );
};

export default AlbumForm;
