import React, { useState } from "react";
import "../Style/Transaksi.css";

import terpalImg from "../assets/terpal.jpeg";
import karungImg from "../assets/karung.jpeg";

function Transaksi() {
  const [cart, setCart] = useState([
    {
      id: 1,
      nama: "Terpal",
      harga: 25000,
      qty: 1,
      gambar: terpalImg,
    },
    {
      id: 2,
      nama: "Karung",
      harga: 2500,
      qty: 10,
      gambar: karungImg,
    },
  ]);

  const tambahQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const kurangQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.harga * item.qty,
    0
  );

  return (
    <div className="transaksi-container">
      <div className="keranjang-box">
        <h3>Keranjang</h3>
      </div>

      {cart.map((item) => (
  <div className="produk-item" key={item.id}>
    <img src={item.gambar} alt={item.nama} />

    <div className="produk-info">
      <h4>{item.nama}</h4>
      <p>Rp {item.harga.toLocaleString("id-ID")}</p>
    </div>

    <div className="qty-control">
      <button onClick={() => kurangQty(item.id)}>-</button>
      <span>{item.qty}</span>
      <button onClick={() => tambahQty(item.id)}>+</button>
    </div>
  </div>
))}
      <div className="total-box">
        <div className="row">
          <span>Subtotal</span>
          <span>Rp {subtotal.toLocaleString("id-ID")}</span>
        </div>

        <div className="row">
          <span>Diskon</span>
          <span>Rp 0</span>
        </div>

        <div className="row total">
          <span>Total</span>
          <span>Rp {subtotal.toLocaleString("id-ID")}</span>
        </div>
      </div>

      <button className="btn-print">Print</button>

      <button className="btn-simpan">
        Simpan Transaksi
      </button>
    </div>
  );
}

export default Transaksi;