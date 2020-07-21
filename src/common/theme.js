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
      main: "#BDBDBD"
    }
  },
  typography: {
    fontFamily: "Nunito",
    button: {
      textTransform: "none"
    }
  }
});

export default theme;
