import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Optional: For loading state
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    setLoading(true); // Set loading to true when starting login
    try {
      await login(dispatch, { username, password });
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false); // Set loading to false after request completes
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="text"
        placeholder="username"
        value={username} // Set value to control input
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        placeholder="password"
        value={password} // Set value to control input
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleClick}
        style={{ padding: 10, width: 100 }}
        disabled={loading} // Disable button when loading
      >
        {loading ? "Loading..." : "Login"} {/* Show loading text */}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
