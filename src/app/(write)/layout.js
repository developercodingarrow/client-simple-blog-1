import React from "react";
import "../globals.css";
import NavBar from "../../components/NavBar/NavBar";
import TopBanner from "../../components/sidebar/TopBanner";

export default function BlogWriteLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div className="user_profileLayout">{children}</div>
      </body>
    </html>
  );
}
