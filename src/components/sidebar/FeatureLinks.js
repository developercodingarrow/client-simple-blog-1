import React from "react";
import styles from "./faetureLinks.module.css";
import Link from "next/link";

export default function FeatureLinks() {
  return (
    <div className={styles.list_card}>
      <div className={styles.listBox_heading}>
        <h3>Feature Post</h3>
      </div>
      <div className={styles.links_wraper}>
        {[1, 2, 3, 4, 5].map(() => {
          return (
            <Link href={"/"} className={styles.feature_linkStyle}>
              Mental strength is on everyone’s wish list.
            </Link>
          );
        })}
      </div>
    </div>
  );
}
