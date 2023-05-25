import React, { useContext } from "react";
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import { GiAnimalHide } from "react-icons/gi";
import { AuthContext } from "../../../Providers/AuthProvider";
import '../../Login/Login.css';
import './NavigationBar.css';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.error(error));
    }
    return (
        <Navbar className="pt-4 rounded" style={{ backgroundColor: "#a1c89e" }}>
            <Container className="nav align-items-center">
                <GiAnimalHide style={{ fontSize: "1.8rem", color: "#182917" }}></GiAnimalHide>
                <Navbar.Brand className="fs-2 fw-bolder" style={{ color: "#182917" }} href="/">Animals Toy World</Navbar.Brand>
                <Nav className="mx-auto align-items-center">
                    <Nav.Link className="fw-semibold" style={{ color: "#182917" }} href="/">Home</Nav.Link>
                    <Nav.Link className="fw-semibold" style={{ color: "#182917" }} href="/blogs">Blogs</Nav.Link>
                    <Nav.Link className="fw-semibold" style={{ color: "#182917" }} href="/alltoys">All toys</Nav.Link>
                    {
                        user ? <>
                            <Nav.Link className="fw-semibold" style={{ color: "#182917" }} href="/addtoy">Add a Toy</Nav.Link>
                            <Nav.Link className="fw-semibold" style={{ color: "#182917" }} href="/mytoys">My Toys</Nav.Link>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{user.displayName}</Tooltip>}>
                                <span className="d-inline-block">
                                    <img className="me-3 border-warning rounded" src={user.photoURL} alt="" width="50px" height="50px" />
                                </span>
                            </OverlayTrigger>
                            <Button onClick={handleLogout} className="button-log">Logout</Button>
                        </> :
                            <>
                                <Nav.Link className="fw-semibold" style={{ color: "#182917" }} href="/login">Login</Nav.Link>
                            </>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;