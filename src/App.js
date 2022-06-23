import "./App.css";
import { Routes, Route } from "react-router-dom";
import AlbumOverview from "./components/AlbumOverview";
import Home from "./components/Home";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import AlbumDetail from "./components/AlbumDetail";
import CreateAlbum from "./components/CreateAlbum";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar>
          <Toolbar>
            <IconButton href="/">Album Frontend</IconButton>
            <IconButton href="/album">Album overview</IconButton>
          </Toolbar>
        </AppBar>
        {/* <Container></Container> */}

        <Routes>
          <Route index element={<Home />} />
          <Route path="/album" element={<AlbumOverview />} />
          <Route path="/album/:id" element={<AlbumDetail />} />
          <Route path="/new" element={<CreateAlbum />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
