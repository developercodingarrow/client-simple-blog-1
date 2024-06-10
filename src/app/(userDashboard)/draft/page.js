import React from "react";
import styles from "./draft.module.css";
import DashboardHeader from "../../../components/userprofile/DashboardHeader";
import SideBar from "../../../components/sidebar/SideBar";
import PageTab from "../../../components/client_components/tab/PageTab";
import { userNavigationLink } from "../../../jsonData/pagelinks";
import BlogCard from "../../../components/blogLists/BlogCard";

export default function DraftdPage() {
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <DashboardHeader />
      </div>

      <div className={styles.tab_wrapper}>
        <PageTab tabLinks={userNavigationLink} />
      </div>

      <div className={styles.tab_container}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, i) => {
          return <BlogCard />;
        })}
      </div>

      <div className={styles.sidebar_wrapper}>
        <SideBar />
      </div>
    </div>
  );
}
