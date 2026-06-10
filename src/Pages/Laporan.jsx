import "../Style/Laporan.css";

function Laporan() {
  return (
    <div className="laporan-container">
      <div className="header">
        <h3>Laporan Penjualan</h3>

        <div className="filter-row">
          <input
            type="text"
            value="01/05/2025-21/05/2025"
            readOnly
          />

          <button className="filter-btn">
            🗂️ Filter
          </button>
        </div>
      </div>

      <div className="card-summary">
        <div className="summary-box">
          <p>Total Penjualan</p>
          <h4>Rp0</h4>
          <span>+12%</span>
        </div>

        <div className="summary-box">
          <p>Transaksi</p>
          <h4>0</h4>
          <span>0%</span>
        </div>

        <div className="summary-box">
          <p>Rata-rata Transaksi</p>
          <h4>Rp0</h4>
          <span>0%</span>
        </div>
      </div>

    </div>
  );
}
export default Laporan;