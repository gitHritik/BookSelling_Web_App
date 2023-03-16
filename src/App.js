import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import BooksDescription from "./pages/BooksDescription";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/books" element={<BooksDescription />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
