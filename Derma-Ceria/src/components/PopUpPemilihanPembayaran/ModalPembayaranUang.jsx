import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import styles from './PopUpPemilihanPembayaran.module.css';  // Import file CSS module
import SuccessModal from './SuccessModal'; // Import the SuccessModal component

const ModalPembayaranUang = ({ showModal, handleClose, donationAmount, serviceFee }) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const paymentMethods = [
    { id: 1, name: 'GoPay', image: 'src/assets/logos/GoPay.png', title: 'E-Wallet' },
    { id: 2, name: 'Dana', image: '/src/assets/logos/Dana.png', title: 'E-Wallet' },
    { id: 3, name: 'BRIVA', image: '/src/assets/logos/BRIVA.png', title: 'Virtual Account' },
    { id: 4, name: 'Mandiri', image: '/src/assets/logos/Mandiri.png', title: 'Virtual Account' }
  ];

  // Group payment methods by title
  const groupedPaymentMethods = paymentMethods.reduce((acc, method) => {
    if (!acc[method.title]) {
      acc[method.title] = [];
    }
    acc[method.title].push(method);
    return acc;
  }, {});

  const totalAmount = parseInt(donationAmount) + serviceFee;

  const handleDonasiClick = () => {
    setShowSuccessModal(true);
    handleClose();
  };

  const handleSuccessClose = () => setShowSuccessModal(false);

  return (
    <div className={styles.bodyPembayaranUang}>
      <Modal show={showModal} onHide={handleClose} dialogClassName={styles.customModal}>
        <Modal.Header closeButton>
          <Modal.Title>Pilih Metode Pembayaran</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {Object.keys(groupedPaymentMethods).map(title => (
              <div key={title}>
                <h6 className={styles.paymentTitle}>{title}</h6>
                {groupedPaymentMethods[title].map(method => (
                  <div key={method.id} className={styles.paymentMethod}>
                    <Form.Check.Label className={styles.paymentLabel}>
                      <img src={method.image} alt={method.name} className={styles.paymentImage} />
                      {method.name}
                    </Form.Check.Label>
                    <Form.Check.Input 
                      type="radio" 
                      id={`payment-${method.id}`} 
                      name="paymentMethod" 
                      className={`${styles.radioInput} custom-control-input`} 
                    />
                  </div>
                ))}
                <hr />
              </div>
            ))}
          </Form>
        </Modal.Body>
        <h6 className={styles.paymentDetailsTitle}>Rincian Pembayaran</h6>
        <div className={`${styles.paymentAmountRight} ${styles.paymentDetailsFirst}`}>
          <p className={styles.paymentDetailsContent}>Nominal Donasi:</p>
          <p className={styles.paymentDetailsContent}>Rp. {donationAmount}</p>
        </div>
        <div className={`${styles.paymentAmountRight} ${styles.paymentDetailsFirst}`}>
          <p className={styles.paymentDetailsContent}>Biaya Layanan:</p>
          <p className={styles.paymentDetailsContent}>Rp. {serviceFee}</p>
        </div>
        <div className={`${styles.paymentAmountRight} ${styles.paymentDetailsFirst}`}>
          <p className={styles.paymentDetailsContent1}><b>Total:</b></p>
          <p className={styles.paymentDetailsContent1}><b>Rp. {totalAmount}</b></p>
        </div>
        <Modal.Footer>
          <Button className={styles.buttonPembayaran} variant="warning" onClick={handleDonasiClick}>Donasi</Button>
        </Modal.Footer>
      </Modal>

      {/* Success Modal */}
      <SuccessModal showSuccessModal={showSuccessModal} handleSuccessClose={handleSuccessClose} />
    </div>
  );
};

export default ModalPembayaranUang;
