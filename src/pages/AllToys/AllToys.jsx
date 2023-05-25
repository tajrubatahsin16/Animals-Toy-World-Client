import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import AllToysRow from "./AllToysRow";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
    const [alltoys, setAllToys] = useState([]);
    const navigate = useNavigate();
    useTitle('All Toys');

    useEffect(() => {
        fetch('https://assignment-11-server-sigma-eight.vercel.app/alltoys', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setAllToys(data)
                }
                else {
                    navigate('/');
                }
            })
    }, [navigate])
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center">
                <BsFillFileEarmarkArrowDownFill style={{ fontSize: "2rem", color: "#569153" }}></BsFillFileEarmarkArrowDownFill>
                <h2 className="text-center my-4 fst-italic fw-bolder" style={{ color: "#569153" }}>All Available Toys</h2>
            </div>
            <Table striped bordered hover style={{ border: "2px solid #569153" }} className="text-center">
                <thead>
                    <tr>
                        <th style={{ color: "#182917" }}>Seller</th>
                        <th style={{ color: "#182917" }}>Toy Name</th>
                        <th style={{ color: "#182917" }}>Toy Category</th>
                        <th style={{ color: "#182917" }}>Price (tk)</th>
                        <th style={{ color: "#182917" }}>Available Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alltoys.map(alltoy => <AllToysRow key={alltoy._id}
                            alltoy={alltoy}></AllToysRow>)
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default AllToys;