import React from "react";
import styles from "./blogcard.module.css";
import Image from "next/image";
import Link from "next/link";
import thumblin from "../../../public/web-static-img/luxury short stay service apartments for rent in Gurgaon.png";
import autherImage from "../../../public/web-static-img/auth_image.jpg";
import {
  CiHeart,
  IoShareOutline,
  HiOutlineDotsVertical,
} from "../../staticutils/ApplicationIcon";

export default function BlogCard() {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_imageBox}>
        <Image src={thumblin} className={styles.thumblin_style} />
      </div>
      <div className={styles.card_content}>
        <div className={styles.card_top_bar}>
          <div className={styles.auther_detailsBox}>
            <div className={styles.auther_image_wrapper}>
              <Image
                src={autherImage}
                width={100}
                className={styles.auther_image_Style}
              />
            </div>
            <div className={styles.auther_name_wrapper}>
              imperial apartments
            </div>
          </div>
          <div className={styles.card_date}>3/06/2024</div>
        </div>

        <div className={styles.card_title_wrapper}>
          <h2>Luxury Short Stay Service Apartments For Rent In Gurgaon</h2>
        </div>
        <div className={styles.meta_descreption}>
          <p>
            Short-stay service apartments in Gurgaon offer luxury and
            affordability.
          </p>
        </div>
        <div className={styles.card_footer}>
          <div className={styles.card_social_action}>
            <CiHeart />
            <IoShareOutline />
          </div>
          <div className={styles.card_action_DropDown}>
            <HiOutlineDotsVertical />
          </div>
        </div>
      </div>
    </div>
  );
}
