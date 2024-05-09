import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SplitLayout from './pages/SplitLayout.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SplitLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
