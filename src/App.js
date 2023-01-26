import "./App.css";
import Layout from "./components/Layout";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const headingFont = createTheme({
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(','),
    },
  });
  return (
    <ThemeProvider theme={headingFont}>
      <div className="App">
        <Layout />
      </div>
    </ThemeProvider>
  );
}

export default App;
