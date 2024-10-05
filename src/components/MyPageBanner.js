// MyPageBanner.js
import React from "react";
import "./MyPageBanner.css"; // Ensure this CSS file is ready

function MyPageBanner({ imageUrl, text }) {
  return (
    <div
      className="banner-container"
      style={{
        backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
        backgroundColor: !imageUrl ? "#333" : "transparent", // Fallback background color if no image
      }}
    >
      <h1 className="banner-text">{text || ""}</h1>
    </div>
  );
}

export default MyPageBanner;
