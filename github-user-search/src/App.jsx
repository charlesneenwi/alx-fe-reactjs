import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  

  return (
    <BrowserRouter>
      
      <header>
        <h1>GitHub User Search</h1>
      </header>
      <main>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        </Routes>
      </main>

      <footer>
        <p>© 2026 GitHub User Search</p>
      </footer>
    </BrowserRouter>
  )
}

export default App
