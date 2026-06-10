import { Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Transaksi from "./Pages/Transaksi";
import Produk from "./Pages/Produk";
import Laporan from "./Pages/Laporan";
import struk from "./Pages/struk";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/transaksi" element={<Transaksi />} />
      <Route path="/produk" element={<Produk />} />
      <Route path="/laporan" element={<Laporan />} />
       <Route path="/struk" element={<struk />} />
    </Routes>
  );
}

export default App;