import React from "react";
import styles from "./pagetab.module.css";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
} from "../../../staticutils/ApplicationIcon";
import { tags } from "../../../jsonData/pagelinks";
import Link from "next/link";
export default function PageTab() {
  return (
    <div className={styles.tab_container}>
      <div className={styles.arrow_Box}>
        {" "}
        <MdArrowBackIos />
      </div>
      <div className={styles.tabs_wrapper}>
        {tags.map((el, i) => {
          return (
            <Link href={`${el.hrfLinks}`} className={styles.tab_link}>
              {el.name}
            </Link>
          );
        })}
      </div>
      <div className={styles.arrow_Box}>
        <MdArrowForwardIos />
      </div>
    </div>
  );
}
