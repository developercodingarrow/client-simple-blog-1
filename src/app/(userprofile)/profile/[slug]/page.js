import React from "react";
import styles from "./userprofile.module.css";
import SideBar from "../../../../components/sidebar/SideBar";
import userProfile from "../../../../../public/web-static-img/user-profile.jpeg";
import Image from "next/image";
import ProfileMsgBtn from "../../../../components/client_components/buttons/ProfileMsgBtn";
import { PiShareFat } from "../../../../staticutils/ApplicationIcon";
import PageTab from "../../../../components/client_components/tab/PageTab";
import { profileTab } from "../../../../jsonData/pagelinks";
import BlogCard from "../../../../components/blogLists/BlogCard";
import TabContent from "../../../../components/userprofile/TabContent";
import DashboardHeader from "../../../../components/userprofile/DashboardHeader";

export default function UserProfilePage() {
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        {/* <div className={styles.profile_header}>
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
        </div> */}
        <DashboardHeader />
      </div>
      <div className={styles.tab_wrapper}>
        <PageTab tabLinks={profileTab} />
      </div>
      <div className={styles.tab_container}>
        <TabContent />
      </div>
      <div className={styles.sidebar_wrapper}>
        <SideBar />
      </div>
    </div>
  );
}
