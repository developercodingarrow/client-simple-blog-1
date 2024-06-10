"use client";

import React, { useEffect, useState } from "react";
import styles from "./blogListsection.module.css";
import PageTab from "../client_components/tab/PageTab";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import BlogCard from "./BlogCard";
import SideBar from "../sidebar/SideBar";
import { tags } from "../../jsonData/pagelinks";

export default function BlogListSection() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={styles.section_container}>
      <div className={styles.contnet_container}>
        <div className={`${styles.tab_bar} ${isSticky ? styles.sticky : ""}`}>
          <PageTab tabLinks={tags} />
        </div>
        <div className={styles.cards_wrapper}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, i) => {
            return <BlogCard />;
          })}
        </div>
      </div>
      <div className={styles.sidebar_container}>
        <div
          className={`${styles.sidebar_element} ${
            isSticky ? styles.sticky : ""
          }`}
        >
          <SideBar />
        </div>
      </div>
    </div>
  );
}
