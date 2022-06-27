import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./Components/Styles/__globalStyles.scss";
import Home from "./Pages/Home";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
