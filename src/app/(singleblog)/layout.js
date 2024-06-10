import React from "react";
import "../globals.css";
import NavBar from "../../components/NavBar/NavBar";
import TopBanner from "../../components/sidebar/TopBanner";

export default function SingleBlogLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />

        <div className="single_blog_layout">{children}</div>
      </body>
    </html>
  );
}
