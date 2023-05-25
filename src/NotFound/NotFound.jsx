import React from "react";
import { Link } from "react-router-dom";
import img from '../assets/NotFound.jpg'
import './NotFound.css';
import useTitle from "../hooks/useTitle";

const NotFound = () => {
    useTitle('Not Found');
    return (
        <div>
            <Link to="/" className="text-center my-4 fst-italic fw-bolder" style={{ color: "#569153" }}><h2>Back to the Home</h2></Link>
            <img className="photo my-5 rounded" src={img} alt="" />
        </div>
    );
}

export default NotFound;