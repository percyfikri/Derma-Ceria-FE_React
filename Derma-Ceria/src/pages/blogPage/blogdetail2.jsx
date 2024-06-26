import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./blog.module.css";
import Blogdetail from "../../assets/images/DBlog2.jpg";
import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";

const blogdetail = () => {
  return (
    <div className={styles.blogdetail}>
      <div className={styles["content-container"]}>
        <Row>
          <h2 className={styles["title"]}>Donasi Mudah dan Terpercaya Bersama Dermaceria</h2>
          <p className={styles["date-category"]}>DermaCeria | 2 April 2024</p>
          <Col md={6}>
            <img src={Blogdetail} alt="blog-pic" className={styles["blog-pic"]} />
          </Col>
          <Col md={6}>
            <p className={`${styles["blog-content"]} mb-5`}>
              Tidak hanya berbentuk uang, tetapi bersama Dermaceria, kita dapat berdonasi dengan barang secara sukarela. DermaCeria sudah terbukti terpercaya dalam menyalurkan donasi kepada yang membutuhkan. Sumbanganmu sangat berarti bagi
              kami dan para penerima manfaat. Dengan berdonasi melalui DermaCeria, kita dapat membantu meringankan beban mereka yang sedang dalam kesulitan. Donasi barang seperti pakaian, makanan, atau peralatan rumah tangga bisa memberikan
              dampak besar bagi kehidupan orang lain. Setiap sumbangan yang diberikan akan dikelola dengan transparan dan tepat sasaran. Mari bersama-sama berbagi dan membuat perubahan positif dengan DermaCeria!
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default blogdetail;
