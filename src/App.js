import "./App.css";

import * as React from "react";

import { Routes, Route, useNavigate } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Dashboard, NotFound, BS, Q1, Q2, Q3, Q4, Q5, AF } from "pages";

import { Box } from "@mui/material";

function App() {
  const THEME = createTheme({
    typography: {
      fontFamily: `"sf-pro", "sd-gothic"`,
    },
  });

  return (
    <ThemeProvider theme={THEME}>
      <Box sx={{ m: 0, p: 0 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bs" element={<BS />} />
          <Route path="/q1" element={<Q1 />} />
          <Route path="/q2" element={<Q2 />} />
          <Route path="/q3" element={<Q3 />} />
          <Route path="/q4" element={<Q4 />} />
          <Route path="/q5" element={<Q5 />} />
          <Route path="/af" element={<AF />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Box>

      <Box
        sx={{
          border: 1,
          borderRadius: 3,
          pl: 3,
          m: 5,
          backgroundColor: "black",
        }}
      >
        <h2 style={{ color: "yellow" }}>
          분과장에게 질문하는 것을 주저하지 말아 주세요!
        </h2>
      </Box>

      <ToastContainer position="bottom-left" />
    </ThemeProvider>
  );
}

export default App;
