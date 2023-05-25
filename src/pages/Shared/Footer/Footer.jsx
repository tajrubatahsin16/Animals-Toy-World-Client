import React from "react";
import { Button } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { GiAnimalHide } from "react-icons/gi";
import './Footer.css';

const Footer = () => {
    return (
        <div className="rounded" style={{ backgroundColor: "#a1c89e" }}>
            <div className="footer d-flex mt-5 px-5 gap-5 py-3 align-items-center">
                <div className="mx-auto" style={{ color: "#182917" }}>
                    <div className="d-flex align-items-center">
                        <GiAnimalHide style={{ fontSize: "1.8rem", color: "#182917" }}></GiAnimalHide>
                        <h3 style={{ color: "#182917" }} className="fw-bolder">Animals Toy World</h3>
                    </div>
                    <p className="fst-italic fw-semibold" style={{ color: "#182917" }}>Contact Us: +8801085737375</p>
                    <p className="fst-italic fw-semibold" style={{ color: "#182917" }}>Address: 4/B block, Gulshan, Dhaka-1210, Bangladesh</p>
                    <FaFacebook style={{ fontSize: "1.8rem" }} className="me-3"></FaFacebook> <FaTwitter style={{ fontSize: "1.8rem" }} className="me-3"></FaTwitter> <FaYoutube style={{ fontSize: "1.8rem" }}></FaYoutube>
                </div>
                <div className="mx-auto">
                    <h4 className="mb-3 fst-italic fw-semibold" style={{ color: "#182917" }}>&copy; 2023, Animals Toy World. All rights reserved.</h4>
                    <input style={{ border: "2px solid #182917" }} className="rounded" type="email" name="email" placeholder="Enter your email" />
                    <Button style={{ backgroundColor: "#182917", border: "2px solid #182917" }} className="ms-3 rounded fst-italic">Subscribe</Button>
                </div>
            </div>
        </div>
    );
}

export default Footer;