import { useState } from "react";
import Carousel, { type Picture } from "./Carousel";

export default function PictureShowcase({ pictures }: { pictures: Picture[] }) {
  return (
    <div className="h-64">
      <Carousel pictures={pictures} />
    </div>
  );
}
