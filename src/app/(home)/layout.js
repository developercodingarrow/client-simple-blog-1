import React from "react";
import "../globals.css";
import NavBar from "../../components/NavBar/NavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />

        <div className="children_wrapper">{children}</div>
      </body>
    </html>
  );
}
