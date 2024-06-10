import React from "react";
import styles from "./singlebolgpage.module.css";
import SideBar from "../../../../components/sidebar/SideBar";
import Image from "next/image";
import userImage from "../../../../../public/web-static-img/auth_image.jpg";
import Link from "next/link";
import {
  CiSaveDown2,
  VscLiveShare,
  RxDotsVertical,
} from "../../../../staticutils/ApplicationIcon";
import coverImage from "../../../../../public/web-static-img/luxury short stay service apartments for rent in Gurgaon.png";

export default function SingleBlogPage() {
  return (
    <div className={styles.main_container}>
      <div className={styles.content_part}>
        <div className={styles.content_titleBox}>
          <h1>Eight Signs that Narcissists Actually Loved You</h1>
        </div>
        <div className={styles.meta_descreptionBox}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
            odio sed metus tristique rutrum. Phasellus non erat semper,
            scelerisque quam a, dictum neque.
          </p>
        </div>

        <div className={styles.user_action_bar}>
          <div className={styles.user_box}>
            <div className={styles.user_image_wrapper}>
              <Image
                src={userImage}
                width={500}
                height={500}
                className={styles.user_imageStyle}
              />
            </div>
            <div className={styles.user_nameBox}>
              <div>Sanjay Chauhan</div>
              <Link href={"/"} className={styles.link_style}>
                view
              </Link>
            </div>
          </div>
          <div className={styles.action_box}>
            <div>
              {" "}
              <CiSaveDown2 />
            </div>
            <div>
              {" "}
              <VscLiveShare />
            </div>
            <div>
              {" "}
              <RxDotsVertical />
            </div>
          </div>
        </div>
        <div className={styles.blog_Cover_pageBox}>
          <Image
            src={coverImage}
            width={800}
            height={800}
            className={styles.cover_imageStyle}
          />
        </div>
        <div className={styles.content_section}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
            odio sed metus tristique rutrum. Phasellus non erat semper,
            scelerisque quam a, dictum neque. In sagittis dui lacus, eget
            consectetur nulla molestie at. Morbi tortor orci, interdum vel
            vestibulum vitae, dapibus eget neque. Nam sit amet porta nunc, id
            pharetra neque. Mauris volutpat nulla dolor, ut malesuada metus
            rhoncus a. Vestibulum luctus tellus ut ante fringilla, lacinia
            imperdiet lectus gravida. Mauris vestibulum ut mi sed iaculis. Nulla
            urna turpis, malesuada vitae facilisis et, iaculis non dolor. Sed
            eros ipsum, porttitor luctus ipsum vel, vulputate dignissim orci.
            Etiam vel dui finibus, consectetur arcu ac, fringilla turpis. Nulla
            tincidunt nisi leo, sit amet mattis purus laoreet quis. Nullam eget
            mollis nisl. Fusce ac nulla sed massa sagittis fringilla. Morbi vel
            venenatis nulla. Nulla lorem nunc, interdum in ligula vel, imperdiet
            iaculis lectus. Aenean ac justo urna. Duis congue mi turpis, sed
            bibendum mauris eleifend ac. Pellentesque fringilla massa nec
            tincidunt finibus. Vestibulum laoreet urna non consequat volutpat.
            Ut ut turpis non eros mollis tincidunt. Quisque facilisis vel ex
            eget feugiat. Vestibulum viverra diam convallis, condimentum neque
            vel, euismod ex. Morbi varius leo vitae dolor placerat vulputate.
            Praesent nec felis ultricies, rhoncus arcu vel, viverra felis. Sed
            mattis ex vitae leo convallis gravida. Quisque tristique nulla nec
            justo lacinia, imperdiet rhoncus turpis luctus. Aliquam interdum
            ornare ipsum vel facilisis. Integer in magna et est sollicitudin
            pretium ac sed sem. Donec et leo et arcu semper dictum non ac eros.
            Proin maximus urna turpis. Etiam vel purus ac risus semper tincidunt
            ut sit amet lorem. Aenean in sapien sed arcu egestas scelerisque at
            nec dui. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Nulla non ante sed diam ultrices
            finibus. In bibendum ultricies tortor, sodales dignissim metus
            molestie ut. Suspendisse mattis lectus a vehicula rhoncus. Duis eros
            erat, facilisis in gravida id, tempus non ipsum. Sed quis pulvinar
            sapien. Integer non felis eu ante sodales mattis. Morbi lacinia
            neque interdum, placerat erat id, congue ex. Morbi sed ullamcorper
            lacus, vel dapibus augue. Proin nibh dui, blandit quis laoreet sit
            amet, pretium sit amet massa. Aliquam hendrerit nec nisl nec auctor.
            Maecenas convallis placerat nulla, in porta ligula maximus at.
            Integer molestie ornare tellus, nec fermentum dui. Duis dictum
            cursus dolor in scelerisque. Donec at nunc at enim bibendum
            elementum non a felis. Phasellus sed accumsan arcu. Donec tempor
            mauris felis, non blandit lectus aliquam a.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
            odio sed metus tristique rutrum. Phasellus non erat semper,
            scelerisque quam a, dictum neque. In sagittis dui lacus, eget
            consectetur nulla molestie at. Morbi tortor orci, interdum vel
            vestibulum vitae, dapibus eget neque. Nam sit amet porta nunc, id
            pharetra neque. Mauris volutpat nulla dolor, ut malesuada metus
            rhoncus a. Vestibulum luctus tellus ut ante fringilla, lacinia
            imperdiet lectus gravida. Mauris vestibulum ut mi sed iaculis. Nulla
            urna turpis, malesuada vitae facilisis et, iaculis non dolor. Sed
            eros ipsum, porttitor luctus ipsum vel, vulputate dignissim orci.
            Etiam vel dui finibus, consectetur arcu ac, fringilla turpis. Nulla
            tincidunt nisi leo, sit amet mattis purus laoreet quis. Nullam eget
            mollis nisl. Fusce ac nulla sed massa sagittis fringilla. Morbi vel
            venenatis nulla. Nulla lorem nunc, interdum in ligula vel, imperdiet
            iaculis lectus. Aenean ac justo urna. Duis congue mi turpis, sed
            bibendum mauris eleifend ac. Pellentesque fringilla massa nec
            tincidunt finibus. Vestibulum laoreet urna non consequat volutpat.
            Ut ut turpis non eros mollis tincidunt. Quisque facilisis vel ex
            eget feugiat. Vestibulum viverra diam convallis, condimentum neque
            vel, euismod ex. Morbi varius leo vitae dolor placerat vulputate.
            Praesent nec felis ultricies, rhoncus arcu vel, viverra felis. Sed
            mattis ex vitae leo convallis gravida. Quisque tristique nulla nec
            justo lacinia, imperdiet rhoncus turpis luctus. Aliquam interdum
            ornare ipsum vel facilisis. Integer in magna et est sollicitudin
            pretium ac sed sem. Donec et leo et arcu semper dictum non ac eros.
            Proin maximus urna turpis. Etiam vel purus ac risus semper tincidunt
            ut sit amet lorem. Aenean in sapien sed arcu egestas scelerisque at
            nec dui. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Nulla non ante sed diam ultrices
            finibus. In bibendum ultricies tortor, sodales dignissim metus
            molestie ut. Suspendisse mattis lectus a vehicula rhoncus. Duis eros
            erat, facilisis in gravida id, tempus non ipsum. Sed quis pulvinar
            sapien. Integer non felis eu ante sodales mattis. Morbi lacinia
            neque interdum, placerat erat id, congue ex. Morbi sed ullamcorper
            lacus, vel dapibus augue. Proin nibh dui, blandit quis laoreet sit
            amet, pretium sit amet massa. Aliquam hendrerit nec nisl nec auctor.
            Maecenas convallis placerat nulla, in porta ligula maximus at.
            Integer molestie ornare tellus, nec fermentum dui. Duis dictum
            cursus dolor in scelerisque. Donec at nunc at enim bibendum
            elementum non a felis. Phasellus sed accumsan arcu. Donec tempor
            mauris felis, non blandit lectus aliquam a.
          </p>
        </div>
      </div>
      <div className={styles.side_bar_wrapper}>
        <SideBar />
      </div>
    </div>
  );
}
