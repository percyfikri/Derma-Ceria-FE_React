import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./blog.module.css";
import CardBlog from "../../components/CardBlog/CardBlog";
import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";

import CardBlog1 from "../../assets/images/DBlog1.jpg";
import CardBlog2 from "../../assets/images/DBlog2.jpg";
import CardBlog3 from "../../assets/images/DBlog3.jpg";

const Blog = () => {
  return (
    <div className={styles["body-blog"]}>
      <div className={styles["landing-donasi-page"]}>
        <LandingPageComponent />
      </div>

      <div className={styles.BlogCard}>
        <Container>
          <Row className="gap-6 max-md:flex-col max-md:gap-0">
            <Col>
              <CardBlog
                imageSrc={CardBlog1}
                label="Derma Ceria | 1 Juni 2024"
                text="Donasi adalah tindakan pemberian sukarela yang bertujuan untuk membantu individu, atau lembaga yang membutuhkan.Tindakan ini merupakan wujud nyata kepedulian sosial dan empati terhadap sesama."
                LinkButton="/blogdetail1"
              />
            </Col>
            <Col>
              <CardBlog
                imageSrc={CardBlog2}
                label="Derma Ceria | 2 April 2024"
                text="Tidak hanya dengan berbentuk uang,tetapi bersama Dermaceria dapat berdonasi dengan berupa donasi barang secara sukarela dan DermaCeria sudah terbukti terpercaya, sumbanganmu berarti untuk kami!"
                LinkButton="/blogdetail2"
              />
            </Col>
            <Col>
              <CardBlog
                imageSrc={CardBlog3}
                label="Derma Ceria | 9 Mei 2024"
                text="Tips agar dapat berdonasi secara rutin maka luangkan waktumu dengan mempedulikan masyarakat yang membutuhkan dan kiranya tanamkan bahwa pentingnya berdonatur secara rutin."
                LinkButton="/blogdetail3"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Blog;
