import React from "react";
import styles from "./login.module.css";
import authBanner from "../../../../public/web-static-img/auth-banner.png";
import Image from "next/image";
import Link from "next/link";
export default function LoginPage() {
  return (
    <div className={styles.page_container}>
      <div className={styles.inner_container}>
        <div className={styles.image_wrapper}>
          <Image src={authBanner} fill={true} quality={100} />
        </div>

        <div className={styles.form_container}>
          <div className={styles.form_wrapper}>fom wrapper</div>
        </div>
      </div>
    </div>
  );
}
