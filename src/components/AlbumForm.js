import { Button, Card, CardContent, TextField } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";

const AlbumForm = ({ album, onSubmit, onRemove }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: album
      ? album
      : {
          name: "",
          artist: "",
          imageUrl: "",
        },
  });

  let eventHandler;
  if (onSubmit && !onRemove) eventHandler = onSubmit;
  else if (!onSubmit && onRemove)
    eventHandler = onRemove;

  return (
    <form onSubmit={handleSubmit(eventHandler)}>
      <Card>
        <CardContent>
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Name"
                variant="outlined"
                {...field}
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
            render={({ field }) => (
              <TextField
                label="Artist"
                variant="outlined"
                {...field}
                margin="normal"
                fullWidth
              />
            )}
            margin="normal"
          />
          <Controller
            name="imageUrl"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Image URL"
                variant="outlined"
                {...field}
                margin="normal"
                fullWidth
              />
            )}
            margin="normal"
          />
          {onSubmit && !onRemove && <Button type="submit">Save</Button>}
          {!onSubmit && onRemove && <Button type="submit">Remove</Button>}
        </CardContent>
      </Card>
    </form>
  );
};

export default AlbumForm;
