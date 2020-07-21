import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./common/theme";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
