"use client";
import React from "react";
import c1 from "../images/gallery-imgs/carpet/c1.jpg";
import c2 from "../images/gallery-imgs/carpet/c2.jpg";
import c3 from "../images/gallery-imgs/carpet/c3.jpg";
import t1 from "../images/gallery-imgs/tile/t1.jpg";
import s1 from "../images/gallery-imgs/solar/s1.jpg";
import s2 from "../images/gallery-imgs/solar/s2.jpg";
import o1 from "../images/gallery-imgs/other/o1.jpg";
import { useState } from "react";
import Image from "next/image";

export default function GalleryClient() {
  const carpet = [c1, c2, c3];
  const tile = [t1];
  const solar = [s1, s2];
  const other = [o1];
  const all = carpet.concat(tile).concat(solar).concat(other);

  const [active, setActive] = useState("all");
  const [images, setImages] = useState(all);

  function handleClick(x: string) {
    setActive(x);
    if (x === "all") setImages(all);
    else if (x === "solar") setImages(solar);
    else if (x === "tile") setImages(tile);
    else if (x === "carpet") setImages(carpet);
  }

  return (
    <>
      <div className="options-container">
        <ul>
          <li
            className={active === "all" ? "active-option" : ""}
            onClick={() => handleClick("all")}
          >
            ALL
          </li>
          <li
            className={active === "carpet" ? "active-option" : ""}
            onClick={() => handleClick("carpet")}
          >
            Carpet
          </li>
          <li
            className={active === "upholstery" ? "active-option" : ""}
            onClick={() => handleClick("upholstery")}
          >
            Upholstery
          </li>
          <li
            className={active === "windows" ? "active-option" : ""}
            onClick={() => handleClick("windows")}
          >
            Windows
          </li>
          <li
            className={active === "solar" ? "active-option" : ""}
            onClick={() => handleClick("solar")}
          >
            Solar
          </li>
          <li
            className={active === "tile" ? "active-option" : ""}
            onClick={() => handleClick("tile")}
          >
            Tile
          </li>
        </ul>
      </div>
      <div className="gallery-imgs-container">
        {images.map((image, index) => {
          return (
            <div key={index} className="gallery-img-wrapper">
              <Image
              className="gallery-img"
                src={image}
                width={100}
                height={100}
                alt="champions cleaning"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
