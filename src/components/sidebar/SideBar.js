import React from "react";
import styles from "./sidebar.module.css";
import SideBanner from "./SideBanner";
import FeatureLinks from "./FeatureLinks";

export default function SideBar() {
  return (
    <div className={styles.sideBar_container}>
      <div className={styles.parts_wrapper}>
        <SideBanner />
      </div>
      <div className={styles.parts_wrapper}>
        <FeatureLinks />
      </div>
    </div>
  );
}
