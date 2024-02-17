import { useState } from "react";
import Grid from "@mui/material/Grid";
import "./App.scss";

import Home from "./components/Home";
import ResponsiveNavBar from "./components/ResponsiveNavBar";

import { Box } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box className="lightTheme main">
      <ResponsiveNavBar />
      <Home />
    </Box>
  );
}

export default App;
