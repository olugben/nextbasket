import React from "react";
import Image from "next/image";

const Gallery = () => {
  const galleryIndexArr = new Array(9).fill(0).map((_, index) => index + 1);

  return (
    <section>
      <div className="mobile grid grid-cols-3 md:hidden gap-[14px] px-8">
        {galleryIndexArr?.map((item) => (
          <React.Fragment key={item}>
            <Image
              src={`/g-${item}.png`}
              alt="gallery"
              width={200}
              height={200}
            />
          </React.Fragment>
        ))}
      </div>
      <div className="desktop hidden md:grid md:grid-cols-3  gap-[14px] px-8">
        {galleryIndexArr?.map((item) => (
          <React.Fragment key={item}>
            <Image
              src={`/g-${item}.png`}
              alt="gallery"
              width={180}
              height={180}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
