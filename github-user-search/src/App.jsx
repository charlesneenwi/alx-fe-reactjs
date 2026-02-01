import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search"; 

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>

        <Search />

        <Routes>
          <Route path="/" element={<h1></h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
