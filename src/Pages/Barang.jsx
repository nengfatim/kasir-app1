import Sidebar from "../components/Sidebar";

function Barang() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ padding: "20px" }}>
        <h1>Data Barang</h1>

        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama Barang</th>
              <th>Harga</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Indomie</td>
              <td>Rp 3.500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Barang;