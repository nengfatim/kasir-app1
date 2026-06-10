import Sidebar from "../components/Sidebar";
import "../Style/Dashboard.css";

function Dashboard() {
  return (
    <div className="container">
      <Sidebar />

      <div className="dashboard">
        <h1>Dashboard</h1>

        <div className="top-cards">
          <div className="card">
            <h5>Total Penjualan</h5>
            <h2>Rp 0</h2>
              <span>+12%</span>
          </div>

          <div className="card">
            <h5>Total Transaksi</h5>
            <h2>0</h2>
              <span>0%</span>
          </div>

          <div className="card">
            <h5>Total Produk</h5>
            <h2>0</h2>
              <span>0%</span>
          </div>

          <div className="card">
            <h5>Stok Menipis</h5>
            <h2>0</h2>
              <span>0%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;