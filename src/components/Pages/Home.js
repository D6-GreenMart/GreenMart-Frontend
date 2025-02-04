import React from "react";
import Navbar from "./Navbar";  // ✅ Ensure Navbar exists

import "../../css/Home.css";


const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="tagline">
        <h1>Welcome to Green Mart</h1>
       
      </div>
     
      
      <footer>
        <div>📞 Contact Info</div>
        <div>📩 Newsletter</div>
      </footer>
    </div>
  );
};

export default Dashboard;
