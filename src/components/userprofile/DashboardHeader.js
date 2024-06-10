import React from "react";
import styles from "./css/dashbordheader.module.css";
import { PiShareFat } from "../../staticutils/ApplicationIcon";
import Image from "next/image";
import ProfileMsgBtn from "../../components/client_components/buttons/ProfileMsgBtn";
import userProfile from "../../../public/web-static-img/user-profile.jpeg";
export default function DashboardHeader() {
  return (
    <div className={styles.profile_header}>
      <div className={styles.user_profileWrapper}>
        <div className={styles.profile_imageBox}>
          <Image
            src={userProfile}
            width={100}
            height={100}
            className={styles.profile_imgStyle}
          />
        </div>

        <div className={styles.user_bio_details}>
          <div className={styles.user_name}>
            <h2> Sanjay Chauhan</h2>
          </div>
          <div>
            <ProfileMsgBtn />
          </div>
        </div>
      </div>
      <div className={styles.profile_shareIconBox}>
        <PiShareFat />
      </div>
    </div>
  );
}
