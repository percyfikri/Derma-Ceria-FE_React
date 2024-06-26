import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./blog.module.css";
import Blogdetail from "../../assets/images/DBlog3.jpg";
import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";

const blogdetail = () => {
  return (
    <div className="bg-white">
      <div className={styles["content-container"]}>
        <Row>
          <h2 className={styles["title"]}>Pentingnya Meluangkan Waktu untuk Berdonasi</h2>
          <p className={styles["date-category"]}>DermaCeria | 9 Mei 2024</p>
          <Col md={6}>
            <img src={Blogdetail} alt="blog-pic" className={styles["blog-pic"]} />
          </Col>
          <Col md={6}>
            <p className={`${styles["blog-content"]} mb-5`}>
              Agar dapat berdonasi secara rutin, luangkan waktumu untuk mempedulikan masyarakat yang membutuhkan. Tanamkan dalam dirimu bahwa berdonasi secara rutin adalah tindakan penting dan mulia. Cobalah untuk menyisihkan sebagian dari
              penghasilanmu setiap bulan khusus untuk donasi. Membuat jadwal rutin untuk berdonasi juga bisa membantu menjaga konsistensi. Dengan cara ini, kamu dapat memberikan dampak positif yang berkelanjutan bagi mereka yang
              membutuhkan. Tidak hanya itu, dengan berdonasi secara rutin, kamu juga akan merasakan kepuasan batin dan kebahagiaan karena telah berkontribusi untuk kebaikan bersama. Ingatlah bahwa setiap sumbangan, sekecil apapun, sangat
              berarti bagi mereka yang sedang dalam kesulitan.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default blogdetail;
