import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ToysRow = ({ toy, handleDelete }) => {
    const { _id, photo, name, category, price, rating, quantity, details } = toy;
    return (
        <tr>
            <td>
                <img src={photo} alt="" style={{ width: "80px", height: "80px" }} />
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
                <h5 className="fst-italic fw-semibold text-center">{rating}</h5>
            </td>
            <td>
                <h5 className="fst-italic fw-semibold text-center">{quantity}</h5>
            </td>
            <td>
                <p className="fst-italic fw-semibold text-center">{details}</p>
            </td>
            <td>
                <Button onClick={() => handleDelete(_id)} variant="outline-danger">Delete</Button>
            </td>
            <td>
                <Link to={`/update/${_id}`}><Button variant="outline-success">Update</Button></Link>
            </td>
        </tr>
    );
}

export default ToysRow;