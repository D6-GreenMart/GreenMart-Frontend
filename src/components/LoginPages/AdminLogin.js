import React from "react";
import '../../css/AdminLogin.css'; // Import the CSS

function AdminLogin() {
  return (
    <div className="admin-login">
      <h2>Admin Portal</h2>
      <form>
        <input type="email" placeholder="Admin Email" required />
        <input type="password" placeholder="Admin Password" required />
        <button type="submit">Login as Admin</button>
      </form>
    </div>
  );
}

export default AdminLogin;
