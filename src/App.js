import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { GlobalStyle } from "./GlobalStyles";
import { About, Contact, Home } from "./routes/pages";

const App = () => {
  return (
    <BrowserRouter>
      {/* Global style */}
      <GlobalStyle />
      <main className="container">
        {/* header components */}
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
