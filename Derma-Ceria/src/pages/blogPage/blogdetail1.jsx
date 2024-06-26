import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./blog.module.css";
import Blogdetail from "../../assets/images/DBlog1.jpg";
import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";

const blogdetail = () => {
  return (
    <div className={styles.blogdetail}>
      <div className={styles["content-container"]}>
        <Row>
          <h2 className={styles["title"]}>5 Tujuan Donasi dan Manfaatnya</h2>
          <p className={styles["date-category"]}>DermaCeria | Donasi | 12 FEBRUARI 2024</p>
          <Col md={6}>
            <img src={Blogdetail} alt="blog-pic" className={styles["blog-pic"]} />
          </Col>
          <Col md={6}>
            <p className={`${styles["blog-content"]} mb-5`}>
              Program donasi sering kali diorganisir oleh berbagai lembaga amal, yayasan, atau organisasi nirlaba yang memastikan bantuan tepat sasaran. Selain itu, donasi juga bisa menjadi bentuk solidaritas dalam situasi darurat atau
              bencana alam, di mana bantuan segera sangat dibutuhkan. Dengan meningkatnya kesadaran akan pentingnya donasi, semakin banyak orang terlibat dalam kegiatan ini, baik melalui kampanye online maupun penggalangan dana komunitas.
              Donasi juga dapat memberikan dampak jangka panjang, seperti mendukung pendidikan anak-anak yang kurang mampu atau membiayai penelitian untuk penyakit serius. Melalui donasi, kita dapat membantu menciptakan perubahan positif
              dan berkelanjutan di masyarakat, menunjukkan bahwa kebaikan dan empati masih sangat penting dalam kehidupan sehari-hari.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default blogdetail;
