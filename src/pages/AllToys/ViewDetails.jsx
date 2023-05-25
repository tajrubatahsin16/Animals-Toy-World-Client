import React from "react";
import { useLoaderData } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import useTitle from "../../hooks/useTitle";

const ViewDetails = () => {
    const viewDetail = useLoaderData();
    const { _id, photo, name, seller, email, category, price, rating, quantity, details } = viewDetail;
    useTitle('View Details');
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center">
                <TbListDetails style={{ fontSize: "2rem", color: "#569153" }}></TbListDetails>
                <h2 className="text-center my-4 fst-italic fw-bolder" style={{ color: "#569153" }}>Detailed Information of {name}</h2>
            </div>
            <div className="d-flex align-items-center mx-5 gap-4 p-4" style={{ border: "2px solid #569153", borderRadius: "8px" }}>
                <img src={photo} alt="" style={{width: "400px", height: "400px"}} />
                <ul className="fst-italic fw-semibold">
                    <li>Toy Name: {name}</li>
                    <li>Seller Name: {seller}</li>
                    <li>Seller Email: {email}</li>
                    <li>Toy Price: {price}</li>
                    <li>Rating: {rating}</li>
                    <li>Available Quantity: {quantity}</li>
                    <li>Description: {details}</li>
                </ul>
            </div>
        </div>
    );
}

export default ViewDetails;