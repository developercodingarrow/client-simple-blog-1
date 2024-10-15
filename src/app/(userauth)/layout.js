import React from "react";
import "../globals.css";
import NavBar from "../../components/NavBar/NavBar";
import TopBanner from "../../components/sidebar/TopBanner";
import AuthNavBar from "../../components/userAuth/AuthNavBar";

export default function SingleBlogLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthNavBar />

        <div className="auth_pageLayout">{children}</div>
      </body>
    </html>
  );
}
