import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import './Login.css';
import { IoLogIn } from "react-icons/io5";
import useTitle from "../../hooks/useTitle";

const Login = () => {
    const { user, signIn, googleLogin } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login');
    const from = location?.state?.from?.pathname || '/';

    const handleLoginWithGoogle = () => {
        googleLogin(provider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('');
        setSuccess('');
        form.reset();

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
                setSuccess('User Login Successful');
                setError('');
            })
            .catch(error => {
                setError('password or email does not match');
            })
    }
    return (
        <Container className="w-50 my-5 mx-auto">
            <div className="d-flex align-items-center justify-content-center">
                <IoLogIn style={{ fontSize: "2.8rem", color: "#569153" }}></IoLogIn>
                <h2 className="fst-italic text-center" style={{ color: "#569153" }}>Login</h2>
            </div>
            <Form onSubmit={handleLogin} className="rounded p-4 fst-italic" style={{ border: "2px solid #569153" }}>
                <Form.Group style={{ color: "#569153" }} className="mb-3 fw-semibold" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group style={{ color: "#569153" }} className="mb-3 fw-semibold" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Button type="submit" className="button-log text-light fw-bolder">
                    Login
                </Button>
                <br />
                <Form.Text className="" style={{ color: "#569153" }}>
                    Don't have an account? <Link className="fst-italic fw-bolder" style={{ color: "#569153" }} to='/register'>Register</Link>
                </Form.Text>
                <br />
                <Form.Text className="fst-italic fw-bolder">
                    OR
                </Form.Text>
                <div className="d-flex gap-3">
                    <Button onClick={handleLoginWithGoogle} variant="outline-success" className="text-light fw-bolder">
                        Login with Google
                    </Button>
                </div>
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

export default Login;