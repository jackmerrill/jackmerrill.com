import { useState } from "react";
import Carousel, { type Picture } from "./Carousel";

const pictures: Picture[] = [
  {
    title: "Drone Picture of Hampshire College",
    image: "/img/DJI_0565.JPG",
  },
  {
    title: "Drone Picture of Hampshire College (winter)",
    image: "/img/DJI_0605.JPG",
  },
  {
    title: "Bean!!",
    image: "/img/IMG_0196.JPG",
  },
  {
    title: "Ricky!!",
    image: "/img/IMG_3942.JPG",
  },
];

export default function PictureShowcase() {
  return (
    <div className="h-64">
      <Carousel pictures={pictures} />
    </div>
  );
}
