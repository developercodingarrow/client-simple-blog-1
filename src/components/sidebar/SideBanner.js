import React from "react";
import styles from "./sidebanner.module.css";
import Image from "next/image";
import Link from "next/link";
import banner from "../../../public/web-static-img/main-banner.jpg";

export default function SideBanner() {
  return (
    <div className={styles.banner_wrapper}>
      <Image
        src={banner}
        width={500}
        height={500}
        className={styles.banner_style}
      />{" "}
    </div>
  );
}
