import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllToysRow = ({ alltoy }) => {
    const { _id, photo, name, seller, category, price, rating, quantity, details } = alltoy;
    return (
        <tr>
            <td>
                <h5 className="fst-italic fw-semibold text-center">{seller}</h5>
            </td>
            <td>
                <h5 className="fst-italic fw-semibold text-center">{name}</h5>
            </td>
            <td>
                <h5 className="fst-italic fw-semibold text-center">{category}</h5>
            </td>
            <td>
                <h5 className="fst-italic fw-semibold text-center">{price}</h5>
            </td>
            <td>
                <h5 className="fst-italic fw-semibold text-center">{quantity}</h5>
            </td>
            <td>
                <Link to={`/view/${_id}`}><Button variant="outline-success">View Details</Button></Link>
            </td>
        </tr>
    );
}

export default AllToysRow;