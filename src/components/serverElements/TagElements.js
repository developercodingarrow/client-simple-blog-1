import React from "react";
import styles from "./css/tag.module.css";
import Link from "next/link";
import { tags } from "../../jsonData/pagelinks";

export default function TagElements() {
  return (
    <div className={styles.tags_wrapperBox}>
      {tags.map((el, i) => {
        return (
          <Link href={`${el.hrfLinks}`} className={styles.tag_box}>
            {el.name}
          </Link>
        );
      })}
    </div>
  );
}
