// import React from 'react';
// import LandingPage from "./componen/landingPage";

import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./componen/landingPage";
import Login from "./componen/login";
import Register from "./componen/register";
import Dashboard from './componen/dashboard';
import TentangKami from './componen/tentangKami';
import Database from './componen/Database';
import Editor from './componen/Editor';
import IdentitasAnak from './componen/identitasAnak';
import Jadwal from './componen/Jadwal';
import JadwalCekBalita from './componen/jadwalCekBalita';
import Notifikasi from './componen/notifikasi';
import Bantuan from './componen/bantuan';
import PerkembanganAnak from './componen/perkembanganAnak';
import HalamanPengguna from './componen/halamanPengguna';
import RiwayatPengecekan from './componen/riwayatPengecekan';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}>
        </Route>
        <Route path="Login" element={<Login />}>
        </Route>
        <Route path="Register" element={<Register />}>
        </Route>
        <Route path="Dashboard" element={<Dashboard />}>
        </Route>
        <Route path="TentangKami" element={<TentangKami />}>
        </Route>
        <Route path="Editor" element={<Editor />}>
        </Route>
        <Route path="Database" element={<Database />}>
        </Route>
        <Route path="IdentitasAnak" element={<IdentitasAnak />}>
        </Route>
        <Route path="Jadwal" element={<Jadwal />}>
        </Route>
        <Route path="JadwalCekBalita" element={<JadwalCekBalita />}>
        </Route>
        <Route path="Notifikasi" element={<Notifikasi />}>
        </Route>
        <Route path="Bantuan" element={<Bantuan/>}>
        </Route>
        <Route path="PerkembanganAnak" element={<PerkembanganAnak/>}>
        </Route>
        <Route path="HalamanPengguna" element={<HalamanPengguna/>}>
        </Route>
        <Route path="RiwayatPengecekan" element={<RiwayatPengecekan/>}>
        </Route>
      </Routes>
    </Router>
  );
}

const root=
ReactDOM.createRoot (document.getElementById ('root'));
root.render(<app />)
export default App;