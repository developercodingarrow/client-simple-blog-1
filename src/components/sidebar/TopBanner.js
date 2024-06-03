import React from "react";
import topbanner from "../../../public/web-static-img/top banner.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./topbanner.module.css";

export default function TopBanner() {
  return (
    <div className={styles.banner_container}>
      <Image src={topbanner} width={1000} className={styles.top_bannerStyle} />
    </div>
  );
}
