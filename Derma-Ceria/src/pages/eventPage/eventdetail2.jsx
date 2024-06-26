import React from "react";
import { Row, Col } from "react-bootstrap";

import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";
import EventDetailCard from "../../components/EventDetailCard/EventDetailCard";
import EventImageComponent from "../../components/EventImageBanner/EventImageBanner";
import styles from "./event.module.css";
import Beras from "../../assets/images/beragamdonasi7.jpg";
import DetailPict from "../../assets/images/event2.png";

const eventdetail = () => {
  return (
    <div className={styles.body_event}>
      <div className={styles.imageDetailEvent}>
        <img src={DetailPict} alt="" />
      </div>
      <div className={styles.rowcontainer}>
        <div className={styles.Col1}>
          <h4>Charity Children Camp SARENITY</h4>
          <p>
            Charity Children Camp Serenity adalah program kemah amal untuk anak-anak kurang beruntung, menawarkan pengalaman kemah yang menyenangkan dan edukatif. Anak-anak dapat terlibat dalam berbagai aktivitas seperti permainan outdoor,
            seni, kerajinan, dan sesi pembelajaran yang menginspirasi. Program ini bertujuan membangun rasa percaya diri dan keterampilan sosial anak-anak dalam lingkungan yang aman dan mendukung, dengan dukungan emosional dari mentor
            berpengalaman. Dengan berpartisipasi, Anda dapat membantu menciptakan kenangan indah dan peluang baru bagi anak-anak yang membutuhkan, serta berkontribusi pada masa depan yang lebih cerah bagi mereka.
          </p>
        </div>
        <div className={styles.Col2}>
          <EventDetailCard date="Sabtu, 16 Mei 2024" time="09.00 - 12.00" location="Stadion" benefit="Beras" imageSrc={Beras} />
        </div>
      </div>
    </div>
  );
};

export default eventdetail;
