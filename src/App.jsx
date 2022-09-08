import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";
import NotFound from "./components/layouts/NotFound";
import IndexPage from "./pages/IndexPage";
import DaoPage from "./pages/DaoPage";
import { DaosContextProvider } from "./context/DaoContext";

function App() {
  return (
    <>
      <DaosContextProvider>
        <Nav />
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/:id" element={<DaoPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        <Footer />
      </DaosContextProvider>
    </>
  );
}

export default App;
