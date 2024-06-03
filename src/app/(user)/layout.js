import React from "react";
import "../globals.css";
import NavBar from "../../components/NavBar/NavBar";
import TopBanner from "../../components/sidebar/TopBanner";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div>
          <TopBanner />
        </div>
        <div className="user_children_wrapper">{children}</div>
      </body>
    </html>
  );
}
