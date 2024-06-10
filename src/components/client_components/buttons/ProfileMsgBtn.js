import React from "react";
import styles from "./css/profileMsgbtn.module.css";

export default function ProfileMsgBtn() {
  return (
    <div className={styles.btn_container}>
      <button className={styles.btn_style}> Send Message</button>
    </div>
  );
}
