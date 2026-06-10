import React from "react";
import "../Style/struk.css";

function Struk() {
  return (
    <div className="receipt-page">
      <div className="receipt-card">

        <div className="store-header">
          <div className="logo-box">
            <span>U</span>
          </div>

          <div className="store-info">
            <h4>Struk Telakhiri</h4>
            <p>jl.nanggewer no 145</p>
            <p>no telepon: 0832563847</p>
          </div>
        </div>

        <hr />

        <div className="title-section">
          <h3>Struk Pembelian</h3>
        </div>

        <div className="info-grid">
          <div>Tanggal</div>
          <div>: TRX-202405164</div>

          <div>No.Transaksi</div>
          <div>: 21 mei 2026 10.40</div>

          <div>Kasir</div>
          <div>: Kasir 1</div>
        </div>

        <hr />

        <div className="item-list">
          <div className="item-row">
            <span>Karung</span>
            <span>4 X 3.000</span>
            <span>12.000</span>
          </div>

          <div className="item-row">
            <span>Terpal</span>
            <span>1 X 25.000</span>
            <span>25.000</span>
          </div>
        </div>

        <hr />

        <div className="summary">
          <div className="summary-row">
            <span>Subtotal</span>
            <span>51.000</span>
          </div>

          <div className="summary-row">
            <span>Total</span>
            <span>51.000</span>
          </div>

          <div className="summary-row">
            <span>Tunai</span>
            <span>100.000</span>
          </div>

          <div className="summary-row return-money">
            <span>Kembalian</span>
            <span>49.000</span>
          </div>
        </div>

        <hr />

        <div className="footer">
          <p>Terima kasih</p>
          <p>Selamat datang kembali</p>
        </div>

      </div>
    </div>
  );
}

export default Struk;