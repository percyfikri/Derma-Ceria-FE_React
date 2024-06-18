import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, EmailShareButton } from "react-share";
import { FaFacebook, FaTwitter, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import styles from "./ShareSocialMedia.module.css"; // Buat file CSS untuk styling khusus

const ShareModal = ({ showShareModal, handleCloseShareModal, shareUrl, shareText }) => {
  return (
    <Modal show={showShareModal} onHide={handleCloseShareModal} dialogClassName={styles.customModal}>
      <Modal.Header closeButton>
        <Modal.Title>Bagikan Bukti Pembayaran</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.shareModalBody}>
        <p>Bagikan bukti pembayaran Anda di media sosial:</p>
        <div className={styles.shareButtonsContainer}>
          <FacebookShareButton url={shareUrl} quote={shareText}>
            <Button className={styles.shareButton} variant="primary">
              <FaFacebook /> Facebook
            </Button>
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl} title={shareText}>
            <Button className={styles.shareButton} variant="info">
              <FaTwitter /> Twitter
            </Button>
          </TwitterShareButton>
          <WhatsappShareButton url={shareUrl} title={shareText}>
            <Button className={styles.shareButton} variant="success">
              <FaWhatsapp /> WhatsApp
            </Button>
          </WhatsappShareButton>
          <EmailShareButton url={shareUrl} subject="Bukti Pembayaran" body={shareText}>
            <Button className={styles.shareButton} variant="secondary">
              <FaEnvelope /> Email
            </Button>
          </EmailShareButton>
        </div>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
};

export default ShareModal;
