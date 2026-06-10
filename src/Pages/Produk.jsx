import "../Style/Produk.css";
import terpalImg from "../assets/terpal.jpeg";
import karungImg from "../assets/karung.jpeg";


function Produk() {
  const produk = [
    {
      id: 1,
      nama: "Karung",
      harga: "Rp 2.500",
      versi: "Versi 1.0",
      foto: karungImg,
    },
    {
      id: 2,
      nama: "Terpal",
      harga: "Rp 25.000",
      versi: "Versi 2.0",
      foto: terpalImg,
    },
  ];

  return (
  <div className="search-wrapper">
 <input
  className="search"
  placeholder="Cari Produk"
/>
  <div className="kategori">
  <button className="aktif">Semua</button>
  <button>Karung</button>
  <button>Terpal</button>
</div>

      <div className="produk-list">
        {produk.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.foto} alt={item.nama} />

            <h3>{item.nama}</h3>

            <p className="versi">{item.versi}</p>

            <p className="harga">{item.harga}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produk;