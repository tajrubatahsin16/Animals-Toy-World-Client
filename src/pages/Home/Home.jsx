import React, { useEffect, useState } from "react";
import img1 from '../../assets/banner2.png';
import { Button, Col, Container, Form, Row, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos";
import '../../../node_modules/aos/dist/aos.css';
import t1 from '../../assets/teddy1.jpg';
import t2 from '../../assets/teddy2.jpg';
import t3 from '../../assets/teddy3.jpg';
import h1 from '../../assets/horse1.jpg';
import h2 from '../../assets/horse2.jpg';
import h3 from '../../assets/horse3.jpg';
import d1 from '../../assets/dino1.jpg';
import d2 from '../../assets/dino2.jpg';
import d3 from '../../assets/dino3.jpg';
import { TfiGallery } from "react-icons/tfi";
import { FaShopify } from "react-icons/fa";
import Teddy from "./Teddy";
import Horse from "./Horse";
import Dinosaur from "./Dinosaur";
import { MdRoundaboutLeft } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import './Home.css';
import useTitle from "../../hooks/useTitle";

const Home = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    useTitle('Home');

    return (
        <div>
            <Container className="banner w-full d-flex gap-5 align-items-center justify-content-center my-4">
                <img className="img-fluid" src={img1} alt="" />
                <div>
                    <h1 className="fs-1 fw-bolder" style={{ color: "#182917" }}>Your Child's <span style={{ color: "#3a6238" }}>Happiness</span> is Here!</h1>
                    <p className="fst-italic fw-semibold" style={{ color: "#3a6238" }}>Get & Sell the best animal toys for kids maintaining the best quality. Besides earn money and expand your business more. Your Products are safe with us!</p>
                    <Link to='/login'><Button className="fst-italic fw-semibold" variant="outline-success">Get Started</Button></Link>
                </div>
            </Container>
            <hr />
            <div className="mt-5 mb-2 d-flex align-items-center justify-content-center gap-2" data-aos="flip-left">
                <TfiGallery style={{ fontSize: "1.8rem", color: "#3a6238" }}></TfiGallery>
                <h2 className="fw-bolder text-center" style={{ color: "#3a6238" }}>Our Gallery</h2>
            </div>
            <hr />
            <Container className="my-4 w-full">
                <Row className="my-4" data-aos="fade-up">
                    <Col sm><img src={t1} className="rounded" alt="" style={{ width: "300px", height: "300px" }} /></Col>
                    <Col sm><img src={t2} className="rounded" alt="" style={{ width: "300px", height: "300px" }} /></Col>
                    <Col sm><img src={t3} className="rounded" alt="" style={{ width: "300px", height: "300px" }} /></Col>
                </Row>
                <Row className="my-4" data-aos="flip-left">
                    <Col sm><img src={h1} className="rounded" alt="" style={{ width: "300px", height: "300px" }} /></Col>
                    <Col sm><img src={h2} className="rounded" alt="" style={{ width: "300px", height: "300px" }} /></Col>
                    <Col sm><img src={h3} className="rounded" alt="" style={{ width: "300px", height: "300px" }} /></Col>
                </Row>
                <Row className="my-4" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                    <Col sm><img src={d1} className="rounded" alt="" style={{ width: "300px", height: "300px" }} /></Col>
                    <Col sm><img src={d2} className="rounded" alt="" style={{ width: "300px", height: "300px" }} /></Col>
                    <Col sm><img src={d3} className="rounded" alt="" style={{ width: "300px", height: "300px" }} /></Col>
                </Row>
            </Container>
            <hr />
            <div className="mt-5 mb-2 d-flex align-items-center justify-content-center gap-1" data-aos="flip-left">
                <FaShopify style={{ fontSize: "1.9rem", color: "#3a6238" }}></FaShopify>
                <h2 className="fw-bolder text-center" style={{ color: "#3a6238" }}>Categories</h2>
            </div>
            <hr />
            <Container className="tabs my-5">
                <Tabs
                    defaultActiveKey="horse"
                    id="justify-tab-example"
                    className="tabs mb-3 fw-semibold rounded"
                    style={{ backgroundColor: "#a1c89e", width: "1070px" }}
                    justify
                >
                    <Tab eventKey="teddy" title="Teddy">
                        <Teddy></Teddy>
                    </Tab>
                    <Tab eventKey="horse" title="Horse">
                        <Horse></Horse>
                    </Tab>
                    <Tab eventKey="dinosaur" title="Dinosaur">
                        <Dinosaur></Dinosaur>
                    </Tab>
                </Tabs>

            </Container>
            <Container className="my-5">
                <div className="d-flex align-items-center justify-content-center gap-1 mb-4" data-aos="flip-left">
                    <MdRoundaboutLeft style={{ fontSize: "1.9rem", color: "#3a6238" }}></MdRoundaboutLeft>
                    <h2 className="fw-bolder text-center" style={{ color: "#3a6238" }}>About Us</h2>
                </div>
                <div className="rounded p-4" style={{ border: "2px solid #3a6238" }}>
                    <p className="fst-italic fw-semibold" style={{ color: "#3a6238" }}>Toy, plaything, usually for an infant or child, and often an instrument used in a game. Toys, playthings, and games survive from the most remote past and from a great variety of cultures. The ball, kite, and yo-yo are assumed to be the oldest objects specifically designed as toys. Toys vary from the simplest to the most complex things, from the stick selected by a child and imagined to be a hobbyhorse to sophisticated and complex mechanical devices. Coordination and other manual skills develop from cumulative childhood experiences received by manipulating toys such as Teddy bears, Dinosaurs, and other objects that require the use of hands and bodies. Mental agility, beginning in childhood, is challenged by puzzles of spatial relationships.</p>
                    <p className="fst-italic fw-semibold" style={{ color: "#3a6238" }}>So, from 2016 we've started our journey to give a platform where people can sell quality toy with reasonable price to expand their business and where people can also purchase good quality toys for their kids to make them happy with reasonable prices!</p>
                </div>
            </Container>
            <Container>
                <div className="d-flex align-items-center justify-content-center gap-1 mb-4" data-aos="flip-left">
                    <TfiWrite style={{ fontSize: "1.9rem", color: "#3a6238" }}></TfiWrite>
                    <h2 className="fw-bolder text-center" style={{ color: "#3a6238" }}>Give Us Your Opinions</h2>
                </div>
                <Form className="rounded p-4 fst-italic fw-semibold" style={{ border: "2px solid #569153" }}>
                    <Form.Group style={{ color: "#569153" }}>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" placeholder="Enter Your Email"></Form.Control>
                    </Form.Group>
                    <Form.Group className="mt-3" style={{ color: "#569153" }}>
                        <Form.Label>Your Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name"></Form.Control>
                    </Form.Group>
                    <Form.Group className="mt-3" style={{ color: "#569153" }}>
                        <Form.Label>Your Message:</Form.Label>
                        <Form.Control type="text" placeholder="Send Your Opinion to Us About Improvement"></Form.Control>
                    </Form.Group>
                    <Button type="submit" variant="outline-success" className="mt-3 text-light fw-bolder">
                        Send
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default Home;