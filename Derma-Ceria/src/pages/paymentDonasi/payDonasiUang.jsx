import React, { useState } from "react";
import { MDBSwitch } from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../index.css";
import styles from "./paymentDonasi.module.css";
import ModalPembayaranUang from "../../components/PopUpPemilihanPembayaranUang/ModalPembayaranUang";
import BuktiPembayaran from "../../components/ModalBuktiPembayaran/BuktiPembayaran";

const PayDonasiUang = () => {
  const [showModal, setShowModal] = useState(false);
  const [showBuktiModal, setShowBuktiModal] = useState(false);
  const [donationAmount, setDonationAmount] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    isAnonymous: true,
    paymentMethod: "",
    referenceNumber: "123456", // Example reference number
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString()
  });
  const serviceFee = 2500; // Fixed service fee of Rp. 2000

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleDonationAmountClick = (amount) => {
    setDonationAmount(amount);
  };

  const handleCustomAmountChange = (event) => {
    setDonationAmount(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSuccess = (paymentMethod) => {
    setFormData({ ...formData, paymentMethod });
    setShowBuktiModal(true);
  };

  const handleBuktiModalClose = () => setShowBuktiModal(false);

  return (
    <div className={styles["body-payment-donasi"]}>
      <div className={styles["title-donasiUang"]}>
        <h1>Donasi Uang</h1>
      </div>
      <div className={styles["container-donasiUang"]}>
        <div className={styles["container-donasiUang-left"]}>
          <div className={styles["title-form"]}>
            <h3>Data Diri</h3>
          </div>
          <div className={styles["form"]}>
            <div className={styles["buttonAnonym"]}>
              <MDBSwitch
                className="mdb-switch"
                defaultChecked
                id="flexSwitchCheckChecked"
                label="Sembunyikan Nama Saya (Anonim)"
                onChange={() => setFormData({ ...formData, isAnonymous: !formData.isAnonymous })}
              />
            </div>
            <Form className={`${styles["form-donasiUang"]} mb-3`}>
              <Form.Group className={`${styles["form-group-donasiUang"]} my-4`} controlId="formBasicName">
                <Form.Control
                  type="text"
                  placeholder="Nama Lengkap"
                  name="name"
                  onChange={handleInputChange}
                  value={formData.name}
                />
              </Form.Group>
              <Form.Group className={`${styles["form-group-donasiUang"]} my-4`} controlId="formBasicPhone">
                <Form.Control
                  type="phone"
                  placeholder="No. Telepon"
                  name="phone"
                  onChange={handleInputChange}
                  value={formData.phone}
                />
              </Form.Group>
              <Form.Group className={`${styles["form-group-donasiUang"]} my-4`} controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email (Opsional)"
                  name="email"
                  onChange={handleInputChange}
                  value={formData.email}
                />
              </Form.Group>
              <Form.Group className={`${styles["form-group-donasiUang"]} my-4`} controlId="formBasicMessage">
                <Form.Control
                  as="textarea"
                  placeholder="Pesan (Opsional)"
                  style={{ height: "5rem" }}
                  name="message"
                  onChange={handleInputChange}
                  value={formData.message}
                />
              </Form.Group>
            </Form>
          </div>
        </div>

        <div className={styles["container-donasiUang-right"]}>
          <div className={styles["title-Pembayaran"]}>
            <h3>Pilih Nominal Donasi</h3>
          </div>
          <div>
            <Button className={styles["button-nominal"]} onClick={() => handleDonationAmountClick("30000")}>
              Rp. 30.000
            </Button>
            <Button className={styles["button-nominal"]} onClick={() => handleDonationAmountClick("50000")}>
              Rp. 50.000
            </Button>
            <Button className={styles["button-nominal"]} onClick={() => handleDonationAmountClick("70000")}>
              Rp. 70.000
            </Button>
            <Button className={styles["button-nominal"]} onClick={() => handleDonationAmountClick("100000")}>
              Rp. 100.000
            </Button>
          </div>
          <hr />
          <p>Nominal Lainnya</p>
          <div className={styles["nominal-lainya"]}>
            <p>Rp. </p>
            <Form.Control type="text" placeholder="Masukkan Nominal" onChange={handleCustomAmountChange} />
          </div>
          <div className="minimumdonasi my-2" style={{ fontSize: "10px", color: "gray", padding: "0 3rem" }}>
            Minimum Donasi Rp. 20.000
          </div>
          <Button className={styles["button-pembayaran"]} onClick={handleShow}>
            Pilih Metode Pembayaran
          </Button>
        </div>
      </div>

      {/* pop up pembayaran */}
      <ModalPembayaranUang
        showModal={showModal}
        handleClose={handleClose}
        donationAmount={donationAmount}
        serviceFee={serviceFee}
        onSuccess={handleSuccess}
      />

      <BuktiPembayaran
        showBuktiModal={showBuktiModal}
        handleBuktiModalClose={handleBuktiModalClose}
        formData={formData}
        donationAmount={donationAmount}
        serviceFee={serviceFee}
      />
    </div>
  );
};

export default PayDonasiUang;
