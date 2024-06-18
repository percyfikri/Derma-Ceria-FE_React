import React, { useState } from "react";
import { MDBSwitch } from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../../index.css";
import styles from "./paymentDonasi.module.css";

const PayDonasiBarang = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className={styles["body-payment-donasi"]}>
      <div className={styles["title-donasiBarang"]}>
        <h1>Donasi Barang</h1>
      </div>
      <div className={styles["container-donasiBarang"]}>
        <div className={styles["container-donasiBarang-left"]}>
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
              />
            </div>
            <Form className={`${styles["form-donasiBarang"]} mb-3`}>
              <Form.Group className={`${styles["form-group-donasiBarang"]} my-4`} controlId="formBasicName">
                <Form.Control type="text" placeholder="Nama Lengkap" />
              </Form.Group>
              <Form.Group className={`${styles["form-group-donasiBarang"]} my-4`} controlId="formBasicPhone">
                <Form.Control type="phone" placeholder="No. Telepon" />
              </Form.Group>
              <Form.Group className={`${styles["form-group-donasiBarang"]} my-4`} controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email (Opsional)" />
              </Form.Group>
              <Form.Group className={`${styles["form-group-donasiBarang"]} my-4`} controlId="formBasicMessage">
                <Form.Control as="textarea" placeholder="Pesan (Opsional)" style={{ height: "5rem" }} />
              </Form.Group>
            </Form>
          </div>
        </div>

        <div className={styles["container-donasiBarang-right"]}>
          <div className={styles["title-Pilihan"]}>
            <h3>Pilih Jenis Donasi</h3>
          </div>
          <div className={styles["button-container"]}>
            <Button className={`${styles["button-pilihan"]} ${styles["white-button"]}`} onClick={handleShow}>
              Makanan
            </Button>
            <Button className={`${styles["button-pilihan"]} ${styles["white-button"]}`} onClick={handleShow}>
              Pakaian
            </Button>
            <Button className={`${styles["button-pilihan"]} ${styles["white-button"]}`} onClick={handleShow}>
              Barang Bekas
            </Button>
          </div>
        </div>
      </div>

      {/* Modal untuk Pembayaran Barang */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rincian Pembayaran</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formImage">
              <Form.Label>Gambar</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group controlId="formRefNumber">
              <Form.Label>Nomor Referensi</Form.Label>
              <Form.Control type="text" placeholder="Masukkan nomor referensi" />
            </Form.Group>
            <Form.Group controlId="formDate">
              <Form.Label>Tanggal</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group controlId="formTime">
              <Form.Label>Waktu</Form.Label>
              <Form.Control type="time" />
            </Form.Group>
            <hr />
            {/* Metode Pembayaran */}
            <h6 className={styles.buktiTitle}>Metode Pembayaran</h6>
            <div className={styles.buktiMethod}>
              <Form.Check type="radio" id="bukti-1" name="buktiMethod" label="GoPay" className={styles.buktiLabel}>
                <img src="src/assets/logos/GoPay.png" alt="GoPay" className={styles.buktiImage} />
              </Form.Check>
            </div>
            <div className={styles.buktiMethod}>
              <Form.Check type="radio" id="bukti-2" name="buktiMethod" label="Dana" className={styles.buktiLabel}>
                <img src="/src/assets/logos/Dana.png" alt="Dana" className={styles.buktiImage} />
              </Form.Check>
            </div>
            <hr />
            {/* Informasi Pengguna */}
            <Form.Group controlId="formName">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" placeholder="Masukkan nama Anda" />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Nomor Telepon</Form.Label>
              <Form.Control type="tel" placeholder="Masukkan nomor telepon Anda" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Kembali
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PayDonasiBarang;
