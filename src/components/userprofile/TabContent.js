import React from "react";
import styles from "./css/tabcontent.module.css";
import BlogCard from "../blogLists/BlogCard";

export default function TabContent() {
  return (
    <div className={styles.main_container}>
      <div className={styles.cards_wrapper}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, i) => {
          return <BlogCard />;
        })}
      </div>
    </div>
  );
}
