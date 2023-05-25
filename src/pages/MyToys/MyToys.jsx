import React, { useContext, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import ToysRow from "./ToysRow";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    useTitle('My Toys');
    const navigate = useNavigate();
    const url = `https://assignment-11-server-sigma-eight.vercel.app/toys?email=${user?.email}`

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setToys(data)
                }
                else {
                    navigate('/');
                }
            })
    }, [url, navigate])

    const handleDelete = id => {
        // const proceed = confirm('Are you sure you want delete?');
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then(result => {
                if (result.isConfirmed) {
                    fetch(`https://assignment-11-server-sigma-eight.vercel.app/toys/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your Toy has been deleted.',
                                    'success'
                                )
                                const remaining = toys.filter(toy => toy._id !== id);
                                setToys(remaining);
                            }
                        })
                }
            })
    }
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center">
                <BsFillFileEarmarkArrowDownFill style={{ fontSize: "2.2rem", color: "#569153" }}></BsFillFileEarmarkArrowDownFill>
                <h2 className="text-center my-4 fst-italic fw-bolder" style={{ color: "#569153" }}>My Added Toys</h2>
            </div>
            <Table striped bordered hover style={{ border: "2px solid #569153" }} className="text-center">
                <thead>
                    <tr>
                        <th style={{ color: "#182917" }}>Toy Picture</th>
                        <th style={{ color: "#182917" }}>Toy Name</th>
                        <th style={{ color: "#182917" }}>Toy Category</th>
                        <th style={{ color: "#182917" }}>Price (tk)</th>
                        <th style={{ color: "#182917" }}>Rating</th>
                        <th style={{ color: "#182917" }}>Available Quantity</th>
                        <th style={{ color: "#182917" }}>Details</th>
                        <th colSpan={2} style={{ color: "#182917" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map(toy => <ToysRow key={toy._id}
                            toy={toy}
                            handleDelete={handleDelete}></ToysRow>)
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default MyToys;