import React from "react";
import { Row, Col } from "react-bootstrap";

import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";
import EventDetailCard from "../../components/EventDetailCard/EventDetailCard";
import EventImageComponent from "../../components/EventImageBanner/EventImageBanner";
import styles from "./event.module.css";
import Kaos from "../../assets/images/kaos.jpg";
import DetailPict from "../../assets/images/eventdetail.jpg";

const eventdetail = () => {
  return (
    <div className={styles.body_event}>
      <div className={styles.imageDetailEvent}>
        <img src={DetailPict} alt="" />
      </div>
      <div className={styles.rowcontainer}>
        <div className={styles.Col1}>
          <h4>Sport Event : Uniting Communities</h4>
          <p>
            Kami mengadalan sebuah event yang menjadi sebuah kegiatan positif dan diselingi dengan memberikan donasi tunai dan kegiatan tersebut dinamai “Sport Event”. Guna dibuatnya kegiatan tersebut untu membantu masayarakat yang dimana
            hasil pendaftaran tersebut akan dialihkan untuk dana membantu anak kanker. Saat ini, kita semua memiliki kesempatan untuk memberikan dukungan yang sangat dibutuhkan kepada mereka. Dengan mengikuti kegiatan ini dan biaya yang
            dipungut hanya berupa pedaftaran.Event ini tepatnya dilaksanakan dijakarta. Ayo, mari bersama-sama memberikan dukungan dengan cara yang mudah dan bermakna.
          </p>
        </div>
        <div className={styles.Col2}>
          <EventDetailCard date="Sabtu, 16 Mei 2024" time="09.00 - 12.00" location="Stadion" benefit="Kaos" imageSrc={Kaos} />
        </div>
      </div>
    </div>
  );
};

export default eventdetail;
