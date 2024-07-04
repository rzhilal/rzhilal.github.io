import React from "react";
import iconFix from './icon_fix.svg'; // Adjust path to your SVG file

function MyIcon1() {
  return (
    <img 
      src={iconFix} 
      alt="My Icon" 
      style={{ maxWidth: "100%", maxHeight: "100%" }} 
    />
  );
}

export default MyIcon1;
