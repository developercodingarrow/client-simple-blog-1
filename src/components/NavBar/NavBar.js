import React from "react";
import styles from "./navbar.module.css";
import logo from "../../../public/web-static-img/medium-logo.png";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../../jsonData/pagelinks";
import { FaBars } from "../../staticutils/ApplicationIcon";
export default function NavBar() {
  return (
    <div className={styles.Navmain_wrapper}>
      <div className={styles.left_side}>
        <div className={styles.hangbug_wrapper}>
          <FaBars />
        </div>

        <Link href={"/"}>
          <Image src={logo} width={500} className={styles.logo_style} />
        </Link>
      </div>
      <div className={styles.right_side}>
        <div className={styles.nav_linksBox}>
          {navLinks.map((el, i) => {
            return (
              <Link href={`${el.hrfLinks}`} className={styles.link_wrapper}>
                {" "}
                <span>{el.name}</span>
              </Link>
            );
          })}
        </div>
        <div className={styles.authBtn}>Login/ Sing Up</div>
      </div>
    </div>
  );
}
