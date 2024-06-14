// components/PopUpPemilihanPembayaran/SuccessModal.js

import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "./PopUpPemilihanPembayaran.module.css"; // Import file CSS module

const SuccessModal = ({ showSuccessModal, handleSuccessClose }) => {
  return (
    <Modal show={showSuccessModal} onHide={handleSuccessClose} dialogClassName={styles.customModal}>
      <Modal.Header closeButton>
        <Modal.Title>Berhasil</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.successModal}>Pembayaran berhasil! Terima kasih atas donasi Anda.</Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={handleSuccessClose}>
          Bukti Donasi
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SuccessModal;
