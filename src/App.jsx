import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddMovie from "./components/AddMovie";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/add" element={<AddMovie />} />
    </Routes>
  );
};

export default App;
