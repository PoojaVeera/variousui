import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./Pages/Layout";
import { Page1 } from "./Pages/Page1";
import { Page2 } from "./Pages/Page2";
import { Page3 } from "./Pages/Page3";

function App() {
  return (
    <div className="App">
      <Layout />
      <div>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
