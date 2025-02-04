import React from "react";
import '../../css/VendorLogin.css'; // Import the CSS

function VendorLogin() {
  return (
    <div className="vendor-login">
      <h2>Vendor Portal</h2>
      <form>
        <input type="email" placeholder="Vendor Email" required />
        <input type="password" placeholder="Vendor Password" required />
        <button type="submit">Login as Vendor</button>
      </form>
    </div>
  );
}

export default VendorLogin;
