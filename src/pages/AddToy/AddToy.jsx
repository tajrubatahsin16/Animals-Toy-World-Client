import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { IoIosAddCircle } from "react-icons/io";
import '../Login/Login.css';
import Swal from 'sweetalert2'
import { AuthContext } from "../../Providers/AuthProvider";
import useTitle from "../../hooks/useTitle";

const AddToy = () => {
    const {user} = useContext(AuthContext);
    useTitle('Add a Toy');
    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const newToy = { photo, name, seller, email, category, price, rating, quantity, details }

        fetch(' https://assignment-11-server-sigma-eight.vercel.app/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset();
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="mt-4">
            <div className="d-flex align-items-center justify-content-center mb-4">
                <IoIosAddCircle style={{ fontSize: "2.5rem", color: "#569153" }}></IoIosAddCircle>
                <h2 className="text-center fst-italic" style={{ color: "#569153" }}>Add Toy</h2>
            </div>
            <Form onSubmit={handleAddToy}>
                <div className="d-flex mb-4 gap-5">
                    <div style={{ backgroundColor: "#569153" }} className="form-control md:w-1/2 ms-3">
                        <Form.Group>
                            <Form.Label style={{ color: "#182917" }} className="label-text fst-italic fw-bold">Toy Picture</Form.Label>
                            <Form.Control style={{ border: "2px solid #569153", borderRadius: "8px" }} type="text" name="photo" placeholder="Toy Picture" className="input input-bordered w-full" />
                        </Form.Group>
                    </div>
                    <div style={{ backgroundColor: "#569153" }} className="form-control md:w-1/2 me-3">
                        <Form.Group>
                            <Form.Label style={{ color: "#182917" }} className="label-text fst-italic fw-bold">Toy Name</Form.Label>
                            <Form.Control style={{ border: "2px solid #569153", borderRadius: "8px" }} type="text" name="name" placeholder="Toy Name" className="input input-bordered w-full" />
                        </Form.Group>
                    </div>
                </div>
                <div className="d-flex mb-4 gap-5">
                    <div style={{ backgroundColor: "#569153" }} className="form-control md:w-1/2 ms-3">
                        <Form.Group>
                            <Form.Label style={{ color: "#182917" }} className="label-text fst-italic fw-bold">Seller Name</Form.Label>
                            <Form.Control style={{ border: "2px solid #569153", borderRadius: "8px" }} defaultValue={user?.displayName} type="text" name="seller" placeholder="Seller Name" className="input input-bordered w-full" disabled />
                        </Form.Group>
                    </div>
                    <div style={{ backgroundColor: "#569153" }} className="form-control md:w-1/2 me-3">
                        <Form.Group>
                            <Form.Label style={{ color: "#182917" }} className="label-text fst-italic fw-bold">Seller Email</Form.Label>
                            <Form.Control style={{ border: "2px solid #569153", borderRadius: "8px" }} defaultValue={user?.email} type="email" name="email" placeholder="Seller Email" className="input input-bordered w-full" disabled />
                        </Form.Group>
                    </div>
                </div>
                <div className="d-flex mb-4 gap-5">
                    <div style={{ backgroundColor: "#569153" }} className="form-control md:w-1/2 ms-3">
                        <Form.Group>
                            <Form.Label style={{ color: "#182917" }} className="label-text fst-italic fw-bold">Sub-Category</Form.Label>
                            <Form.Select style={{ border: "2px solid #569153", borderRadius: "8px" }} name="category" className="input input-bordered w-full">
                                <option>Teddy Bear</option>
                                <option>Horse</option>
                                <option>Dinosaur</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div style={{ backgroundColor: "#569153" }} className="form-control md:w-1/2 me-3">
                        <Form.Group>
                            <Form.Label style={{ color: "#182917" }} className="label-text fst-italic fw-bold">Price</Form.Label>
                            <Form.Control style={{ border: "2px solid #569153", borderRadius: "8px" }} type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </Form.Group>
                    </div>
                </div>
                <div className="d-flex mb-4 gap-5">
                    <div style={{ backgroundColor: "#569153" }} className="form-control md:w-1/2 ms-3">
                        <Form.Group>
                            <Form.Label style={{ color: "#182917" }} className="label-text fst-italic fw-bold">Rating</Form.Label>
                            <Form.Control style={{ border: "2px solid #569153", borderRadius: "8px" }} type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </Form.Group>
                    </div>
                    <div style={{ backgroundColor: "#569153" }} className="form-control md:w-1/2 me-3">
                        <Form.Group>
                            <Form.Label style={{ color: "#182917" }} className="label-text fst-italic fw-bold">Available Quantity</Form.Label>
                            <Form.Control style={{ border: "2px solid #569153", borderRadius: "8px" }} type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                        </Form.Group>
                    </div>
                </div>
                <div className="d-flex mb-4 gap-5">
                    <div style={{ backgroundColor: "#569153" }} className="form-control md:w-1/2 mx-3">
                        <Form.Group>
                            <Form.Label style={{ color: "#182917" }} className="label-text fst-italic fw-bold">Details</Form.Label>
                            <Form.Control style={{ border: "2px solid #569153", borderRadius: "8px" }} type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </Form.Group>
                    </div>
                </div>
                <div className="d-grid">
                    <Button className="button-log mx-3" type="submit" size="lg">
                        Add Toy
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default AddToy;