import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import certificateData from "./certificateData.json";
import PageHeader from "../../components/PageHeader";
import "./certificates.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Modal from "react-modal";
import { useState } from "react";
import closeModal from "../../images/close.svg";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

Modal.setAppElement("#root");

function Certificates() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const handleOpenModal = (certificate) => {
    setSelectedCertificate(certificate);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  const certificateItems = certificateData.map((certificate) => (
    <SwiperSlide
      key={certificate.id}
      onClick={() => handleOpenModal(certificate)}
    >
      <img src={certificate.image} alt={certificate.title} />
    </SwiperSlide>
  ));

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
          direction="horizontal" // Set the direction to vertical
          // breakpoints={{
          //   // Add a breakpoint for small screens
          //   768: {
          //     direction: "horizontal",
          //     spaceBetween: 16,
          //   },
          // }}
        >
          {certificateItems}

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow"></div>
            <div className="swiper-button-next slider-arrow"></div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>

        <Modal
          isOpen={showModal}
          onRequestClose={handleCloseModal}
          style={{
            content: {
              backgroundColor: "#101010",
              color: "#9f9f9f",
              padding: "60px",
              display: "flex",
              flexDirection: "column",
              width: "400px",
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              zIndex: "999",
            },
          }}
        >
          <img
            src={closeModal}
            className="closeMenu closeModal"
            onClick={handleCloseModal}
            alt="Close"
          />
          {selectedCertificate && (
            <>
              <h3 className="modalTitle">{selectedCertificate.title}</h3>
              <p className="projectDescription">{selectedCertificate.uni}</p>
              {selectedCertificate.LargeImg !== "" && (
                <button
                  className="btn"
                  onClick={() =>
                    (window.location.href = selectedCertificate.LargeImg)
                  }
                >
                  Larger Image
                </button>
              )}
              <button
                className="btn"
                onClick={() =>
                  (window.location.href = selectedCertificate.verify)
                }
              >
                Verify Certificate at {selectedCertificate.uni}
              </button>
            </>
          )}
        </Modal>
      </motion.div>
    </section>
  );
}

export default Certificates;
