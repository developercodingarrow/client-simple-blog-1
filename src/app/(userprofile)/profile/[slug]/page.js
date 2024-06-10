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
