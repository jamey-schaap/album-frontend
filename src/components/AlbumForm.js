import { Button, Card, CardContent, Grid, TextField } from "@material-ui/core";
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

  return (
    <form>
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
          <Grid container spacing={2} style={{ marginTop: "0.5vh" }}>
            {onRemove && (
              <Grid item>
                <Button
                  type="submit"
                  variant="outlined"
                  onClick={handleSubmit(onRemove)}
                  style={{
                    color: "#ff0000",
                    borderColor: "#ff0000",
                  }}
                >
                  Remove
                </Button>
              </Grid>
            )}
            {onSubmit && (
              <Grid item>
                <Button
                  type="submit"
                  variant="outlined"
                  onClick={handleSubmit(onSubmit)}
                  style={{
                    color: "#00FF00",
                    borderColor: "#00FF00",
                  }}
                >
                  Save
                </Button>
              </Grid>
            )}
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};

export default AlbumForm;
