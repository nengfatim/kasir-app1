import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Transaksi from "./pages/Transaksi";
import Produk from "./pages/Produk";
import Laporan from "./pages/Laporan";
import Receipt from "./pages/Struk";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/transaksi" element={<Transaksi />} />
      <Route path="/struk" element={<Receipt />} />
      <Route path="/produk" element={<Produk />} />
      <Route path="/laporan" element={<Laporan />} />
    </Routes>
  );
}

export default App;