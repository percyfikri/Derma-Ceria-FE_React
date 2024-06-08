import React from "react";
import { Card, Col, ProgressBar, Row } from "react-bootstrap";
import styles from "../CardRecomendation/DonationCard.module.css";
import ProfileComponent from "../ProfileComponent";

const DonationCard = ({ imageSrc, title, target, progress, amount }) => {
  return (
    <div>
      <Card className={styles.cardRec}>
        <div className={styles.imageCard}>
          <Card.Img variant="top" src={imageSrc} />
        </div>
        <Card.Body>
          <div className={styles.titleCard}>
            <Card.Text>{title}</Card.Text>
          </div>
          <div className={styles.progressBar}>
            <ProgressBar animated now={progress} variant="warning" style={{ width: "100%", height: "8px" }} />
          </div>
          <div className={styles.amount}>
            <Card.Text>
              <strong>Rp. {amount}</strong> terkumpul dari Rp.{target}
            </Card.Text>
          </div>
          <ProfileComponent/>
          <div className={styles.btnDonasi}>
            <button className="btn btn-warning" style={{ maxWidth: "100%", width: "100%" }}>
              Donasi
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DonationCard;
