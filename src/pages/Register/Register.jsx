import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { GiArchiveRegister } from "react-icons/gi";
import '../Login/Login.css';
import { updateProfile } from "firebase/auth";
import useTitle from "../../hooks/useTitle";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    useTitle('Register');

    const handleRegister = event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError('Please add at least 6 characters');
            return;
        }

        form.reset();

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                setError('');
                event.target.reset();
                setSuccess('User has been created successfully');
                updateUserData(result.user, name, photo);
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }
    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name, photoURL: photo
        })
            .then(() => {
                console.log('user name updated');
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <Container className="w-50 my-5 mx-auto">
            <div className="d-flex align-items-center justify-content-center">
                <GiArchiveRegister style={{ fontSize: "2.8rem", color: "#569153" }}></GiArchiveRegister>
                <h2 className="fst-italic text-center" style={{ color: "#569153" }}>Register Account</h2>
            </div>
            <Form onSubmit={handleRegister} className="rounded p-4 fst-italic" style={{ border: "2px solid #569153" }}>
                <Form.Group style={{ color: "#569153" }} className="mb-3 fw-semibold" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" required />
                </Form.Group>
                <Form.Group style={{ color: "#569153" }} className="mb-3 fw-semibold" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group style={{ color: "#569153" }} className="mb-3 fw-semibold" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group style={{ color: "#569153" }} className="mb-3 fw-semibold" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Your Photo" required />
                </Form.Group>
                <Button type="submit" className="button-log text-light fw-bolder">
                    Register
                </Button>
                <br></br>
                <Form.Text className="" style={{ color: "#569153" }}>
                    Already have an account? <Link className="fst-italic fw-bolder" style={{ color: "#569153" }} to='/login'>Login</Link>
                </Form.Text>
                <Form.Text className="text-danger fw-bold">
                    <p>{error}</p>
                </Form.Text>
                <Form.Text className="text-success fw-bold">
                    <p>{success}</p>
                </Form.Text>
            </Form>
        </Container>
    );
}

export default Register