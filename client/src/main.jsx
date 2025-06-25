import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx';
import Etusivu from './pages/Etusivu.jsx';
import Palvelut from './pages/Palvelut.jsx';
import Me from './pages/Me.jsx';

import './index.css'

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<Etusivu />} />
        <Route path="/palvelut" element={<Palvelut />} />
        <Route path="/me" element={<Me />} />
      </Route>
    </Routes>
    
  </Router>
)
