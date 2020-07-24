import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#EF8E01",
      light: "rgba(239, 142, 1, 0.27)",
      dark: "#F39424",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#2A3C44",
      dark: "#212529",
      light: "#C4C4C4"
    },
    success: {
      main: "#43977F"
    }
  },
  typography: {
    fontFamily: "Nunito",
    button: {
      textTransform: "none"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1500,
      xl: 1920
    }
  }
});

export default theme;
