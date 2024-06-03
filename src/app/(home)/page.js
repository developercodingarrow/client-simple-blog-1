import React from "react";
import HeroSetion from "../../components/home-page/Dekstop/HeroSetion";
import styles from "./homepage.module.css";
import BlogListSection from "../../components/blogLists/BlogListSection";
export default function HomePage() {
  return (
    <div className={styles.page_wrapper}>
      <div className="section_wrapper">
        <HeroSetion />
      </div>
      <div className="section_wrapper">
        <BlogListSection />
      </div>
    </div>
  );
}
