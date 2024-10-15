import React from "react";
import styles from "./css/authnavbar.module.css";
import Image from "next/image";
import Link from "next/link";
import blackLogo from "../../../public/web-static-img/medium-black-logo.png";
export default function AuthNavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.logo_wrapper}>
          <Image src={blackLogo} width={900} className={styles.logo_style} />
        </div>
      </div>
    </div>
  );
}
