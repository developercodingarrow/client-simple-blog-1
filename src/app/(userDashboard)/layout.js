import React from "react";
import "../globals.css";
import NavBar from "../../components/NavBar/NavBar";

export default function SingleBlogLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />

        <div className="user_profileLayout">{children}</div>
      </body>
    </html>
  );
}
