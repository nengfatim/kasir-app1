import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="sidebar">

      <div>

        <div className="logo">
          <span className="logo-icon">👜</span>
          <span>Kasir Digital</span>
        </div>

        <nav className="menu">

        <Link to="/dashboard" className="menu-item active">
  <span>🏠</span>
  <span>Dashboard</span>
</Link>

          <Link
            to="/transaksi"
            className={
              location.pathname === "/transaksi"
                ? "menu-item active"
                : "menu-item"
            }
          >
            🛒 Transaksi
          </Link>

          <Link
            to="/struk"
            className={
              location.pathname === "/struk"
                ? "menu-item active"
                : "menu-item"
            }
          >
            🧾 Struk
          </Link>

          <Link
            to="/produk"
            className={
              location.pathname === "/produk"
                ? "menu-item active"
                : "menu-item"
            }
          >
            📦 Produk
          </Link>

          <Link
            to="/laporan"
            className={
              location.pathname === "/laporan"
                ? "menu-item active"
                : "menu-item"
            }
          >
            📊 Laporan
          </Link>

        </nav>
      </div>

      <div className="logout" onClick={handleLogout}>
        🚪 Keluar
      </div>

    </div>
  );
}

export default Sidebar;