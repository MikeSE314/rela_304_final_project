//import logo from './logo.svg';
import './App.css';
import ChapterWrapper from './ChapterWrapper'

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/:id" element={<ChapterWrapper />} />
      </Routes>
    </div>
  );
}

export default App
