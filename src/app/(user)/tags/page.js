"use client";

import React from "react";
import styles from "../tags/tagspage.module.css";
import { SlMagnifier, FaPlus } from "../../../staticutils/ApplicationIcon";
import SideBar from "../../../components/sidebar/SideBar";
import TagElements from "../../../components/serverElements/TagElements";
export default function TagPage() {
  return (
    <div className={styles.main_container}>
      <div className={styles.contnet_part}>
        <div className={styles.section_header}>
          <div className={styles.search_input_wrapper}>
            <input
              type="text"
              placeholder="secah tags"
              className={styles.serach_input}
            />
            <div className={styles.search_iconBox}>
              <SlMagnifier />{" "}
            </div>
          </div>
          <div>
            <div className={styles.add_iconBox}>
              <FaPlus />{" "}
            </div>
          </div>
        </div>
        <div className={styles.tag_container}>
          <TagElements />
        </div>
      </div>
      <div className={styles.sidebar_section}>
        <SideBar />
      </div>
    </div>
  );
}
