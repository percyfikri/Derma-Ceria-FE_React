import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "./PopUpPemilihanPembayaran.module.css"; 
import videoSrc from "../../assets/icons/success.mp4";

import BuktiPembayaranModal from '../ModalBuktiPembayaran/BuktiPembayaran';

const SuccessModal = ({ showSuccessModal, handleSuccessClose }) => {
  const [showBuktiModal, setShowBuktiModal] = useState(false); // State untuk menampilkan modal Bukti Pembayaran Uang

  const handleBuktiModalOpen = () => {
    setShowBuktiModal(true);
    handleSuccessClose(); // Tutup SuccessModal saat BuktiPembayaranModal dibuka
  };

  const handleBuktiModalClose = () => {
    setShowBuktiModal(false);
  };

  return (
    <>
      <Modal show={showSuccessModal} onHide={handleSuccessClose} dialogClassName={styles.customModal}>
        <Modal.Header closeButton>
          <Modal.Title className={styles.titlesuccess}>Selamat!</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.successModal}>
          <video autoPlay width="100%">
            <source src={videoSrc} type="video/mp4" className={styles.videosuccessModal} />
            Donasi gagal!
          </video>
          <p className={styles.pstyle}>Donasi Berhasil!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className={styles.buttonstyle} variant="warning" onClick={handleBuktiModalOpen}>
            Bukti Donasi
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Bukti Pembayaran */}
      <BuktiPembayaranModal 
        showBuktiModal={showBuktiModal}
        handleBuktiModalClose={handleBuktiModalClose}
      />
    </>
  );
};

export default SuccessModal;
