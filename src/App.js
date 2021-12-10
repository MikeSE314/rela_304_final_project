//import logo from './logo.svg';
import './App.css';
import ChapterWrapper from './ChapterWrapper'

import {
  Navigate,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/:id" element={<ChapterWrapper />} />
        <Route exact path="/" element={<Navigate to="/1" />} />
      </Routes>
    </div>
  );
}

export default App
