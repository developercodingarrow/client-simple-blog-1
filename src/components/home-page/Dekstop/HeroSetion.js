import React from "react";
import styles from "./herosection.module.css";
import Image from "next/image";
import Link from "next/link";
import mainBanner from "../../../../public/web-static-img/main-banner.jpg";
import { tags } from "../../../jsonData/pagelinks";

export default function HeroSetion() {
  return (
    <div className={styles.hero_section_wrapper}>
      <div className={styles.main_banner_wrapper}>
        <Link
          href={"/https://www.google.co.in/"}
          className={styles.banner_link}
        >
          <Image
            src={mainBanner}
            width={1000}
            height={1000}
            className={styles.banner_style}
          />
        </Link>
      </div>
      <div className={styles.side_bar}>
        <div className="section_headingWrapper">
          <h3 className="section_hedaing">Recommended topics</h3>
        </div>
        <div className={styles.tags_wrapperBox}>
          {tags.slice(0, 10).map((el, i) => {
            return (
              <Link href={`${el.hrfLinks}`} className={styles.tag_box}>
                {el.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
