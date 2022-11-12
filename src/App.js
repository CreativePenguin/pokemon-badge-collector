import './App.css';
import { BrowserRouter, Route, Routes, Navigate, HashRouter } from 'react-router-dom';
import BadgeCase from './BadgeCase';
import NotFound from './NotFound';
import PsychicBadge from './PsychicPage';
import Layout from './Layout';
import DarkPage from './DarkPage';
import DragonPage from './DragonPage';
import FairyPage from './FairyPage';
import GhostPage from './GhostPage';
import GroundPage from './GroundPage';
import GrassPage from './GrassPage';
import WaterPage from './WaterPage';

function App() {
  return (
    // <HashRouter basename='/pokemon-badge-collector'>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          {/* <Route path="" element={
            <Routes>
              <Route path="badge-case" element={<BadgeCase />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          } /> */}
          <Route path="" element={<BadgeCase />} />
          <Route path="elgym" element={<PsychicBadge />} />
          <Route path="emo" element={<DarkPage />} />
          <Route path="rawr" element={<DragonPage />} />
          <Route path="fountain" element={<FairyPage />} />
          <Route path="izzy" element={<GhostPage />} />
          <Route path="weed" element={<GrassPage />} />
          <Route path="toph" element={<GroundPage />} />
          <Route path="piss" element={<WaterPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  );
}

export default App;
