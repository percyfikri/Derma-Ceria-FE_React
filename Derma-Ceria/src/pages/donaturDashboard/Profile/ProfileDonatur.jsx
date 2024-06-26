import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Image, Alert } from 'react-bootstrap';
import { BiShow, BiHide } from 'react-icons/bi'; // Import eye icons
import styles from './Profile.module.css'; // Import the CSS module

const ProfileDonatur = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150');
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState({ show: false, message: '', variant: '' });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleEditToggle = () => {
        if (isEditing) {
            // Save data logic
            const success = saveProfileData();
            if (success) {
                setAlert({ show: true, message: 'Profile berhasil dirubah', variant: 'success' });
            } else {
                setAlert({ show: true, message: 'Profile gagal dirubah', variant: 'danger' });
            }
        }
        setIsEditing(!isEditing);
    };

    const saveProfileData = () => {
        // Mock saving data logic
        // Replace with actual API call
        return true; // Simulate success, change to false to simulate failure
    };

    return (
        <Container className={styles.containerprofile}>
            <Row>
                <Col md={3} className={`text-center ${styles.photoProfile}`}>
                    <h3>Data Diri</h3>
                    <Image
                        src={profileImage}
                        roundedCircle
                        className={`mb-3 ${styles.profileImage}`}
                        onClick={() => document.getElementById('fileInput').click()}
                    />
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                    />
                </Col>
                <Col md={8} className={styles.mainContent}>
                    {alert.show && (
                        <Alert variant={alert.variant} onClose={() => setAlert({ show: false, message: '', variant: '' })} dismissible>
                            {alert.message}
                        </Alert>
                    )}
                    <Form>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                className={styles.inputShadow}
                                value={username}
                                readOnly={!isEditing}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                className={styles.inputShadow}
                                value={email}
                                readOnly={!isEditing}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formPhone">
                            <Form.Label>No Hp</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="No Hp"
                                className={styles.inputShadow}
                                value={phone}
                                readOnly={!isEditing}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword" className={styles.passwordGroup}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                readOnly={!isEditing}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span
                                onClick={togglePasswordVisibility}
                                className={styles.passwordToggleIcon}
                            >
                                {showPassword ? <BiHide /> : <BiShow />}
                            </span>
                        </Form.Group>

                        <Button
                            variant="warning"
                            onClick={handleEditToggle}
                            className="mt-3"
                            style={{ float: 'right' }}
                        >
                            {isEditing ? "Simpan" : "Ubah"}
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ProfileDonatur;
