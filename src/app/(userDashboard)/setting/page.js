import React from "react";
import styles from "./setting.module.css";
import DashboardHeader from "../../../components/userprofile/DashboardHeader";
import PageTab from "../../../components/client_components/tab/PageTab";
import SideBar from "../../../components/sidebar/SideBar";
import {
  userNavigationLink,
  userProfile,
  usersocialMedia,
} from "../../../jsonData/pagelinks";
export default function SettingPage() {
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <DashboardHeader />
      </div>

      <div className={styles.tab_wrapper}>
        <PageTab tabLinks={userNavigationLink} />
      </div>

      <div className={styles.tab_container}>
        <section className={styles.section_wrapper}>
          <div className={styles.section_heading}>
            <h2>profile user name</h2>
          </div>

          <div className={styles.component_wrapper}>
            <div>
              <h4>user name</h4>
            </div>
            <div>
              <input type="text" />
            </div>
            <div>
              <button>upadte</button>
            </div>
          </div>
        </section>
        <section className={styles.section_wrapper}>
          <div className={styles.section_heading}>
            <h2>user Profile</h2>
          </div>
          {userProfile.map((el, i) => {
            return (
              <div className={styles.component_wrapper}>
                <div>
                  <h4>{el.lable}</h4>
                </div>
                <div>
                  <input type="text" />
                </div>
              </div>
            );
          })}
          <div>
            <button> Upadte</button>
          </div>
        </section>

        <section className={styles.section_wrapper}>
          <div className={styles.section_heading}>
            <h2>Profile Image</h2>
          </div>
          <div className={styles.component_wrapper}>
            <div>image</div>
          </div>
        </section>

        <section className={styles.section_wrapper}>
          <div className={styles.section_heading}>
            <h2>Social Meida links</h2>
          </div>
          {usersocialMedia.map((el, i) => {
            return (
              <div className={styles.component_wrapper}>
                <div>
                  <h4>{el.lable}</h4>
                </div>
                <div>
                  <input type="text" />
                </div>
              </div>
            );
          })}
          <div>
            <button> Upadte</button>
          </div>
        </section>
      </div>

      <div className={styles.sidebar_wrapper}>
        <SideBar />
      </div>
    </div>
  );
}
