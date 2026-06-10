import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Login.css";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (username.trim() === "" || password.trim() === "") {
      alert("Username dan Password harus diisi");
      return;
    }

    fetch("http://localhost/kasir-api/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.status === "success") {
          alert("Login Berhasil");
          navigate("/dashboard");
        } else {
          alert("Username atau Password Salah");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Tidak dapat terhubung ke server");
      });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-box">👜</div>

        <h1>Kasir Digital</h1>

        <p className="subtitle">
          Silahkan masuk untuk melanjutkan
        </p>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Masukkan Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Masukkan Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-btn" onClick={login}>
          Masuk
        </button>
      </div>
    </div>
  );
}

export default Login;