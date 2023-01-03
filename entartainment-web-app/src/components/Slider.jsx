import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import MovieSlide from "./MovieSlide";
import data from "../data/data.json";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/pagination";

// import "./styles.css";

// import required modules
import { FreeMode } from "swiper";

export default function Slider() {
  return (
    <>
      <div className="head">
        <h1>Trending</h1>
        <Swiper
          slidesPerView={2}
          spaceBetween={40}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {data.map((e, index) =>
            e.isTrending === true ? (
              <SwiperSlide key={index}>
                <MovieSlide data={e} type={"slide"}></MovieSlide>
              </SwiperSlide>
            ) : (
              ""
            )
          )}
        </Swiper>
      </div>
    </>
  );
}
