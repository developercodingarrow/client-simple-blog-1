"use client";
import React, { useState } from "react";
import styles from "./createblog.module.css";
import Image from "next/image";
import plus from "../../../../public/web-static-img/plus.png";
import image from "../../../../public/web-static-img/image.png";
import external from "../../../../public/web-static-img/external.png";
import video from "../../../../public/web-static-img/video.png";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreateBlog() {
  const [open, setopen] = useState(false);
  const [value, setvalue] = useState("");
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button}>
          <Image
            src={plus}
            alt=""
            width={16}
            height={16}
            onClick={() => setopen(!open)}
          />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src={image} alt="" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src={external} alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src={video} alt="" width={16} height={16} />
            </button>
          </div>
        )}

        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setvalue}
          placeholder="Tell Your story"
        />
      </div>
    </div>
  );
}
