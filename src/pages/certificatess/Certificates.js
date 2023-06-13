import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import certificateData from "./certificateData.json";
import { Swiper, SwiperSlide } from "swiper/react";

import PageHeader from "../../components/PageHeader";
import "./certificates.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

function Certificates() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const certificateItems = certificateData.map((certificate) => (
    <SwiperSlide
      key={certificate.id}
      onClick={() => handleClick(certificate.url)}
    >
      <img src={certificate.image} alt={certificate.title} />
    </SwiperSlide>
  ));

  const handleClick = (url) => {
    window.open(url, "_blank"); // Open URL in a new tab/window
  };

  return (
    <section className="portfolio">
      <PageHeader title="Certificates" description="Explore my credentials" />
      <motion.div
        className="container"
        ref={ref}
        initial={{ x: "-10vw", opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {certificateItems}

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </motion.div>
    </section>
  );
}

export default Certificates;
