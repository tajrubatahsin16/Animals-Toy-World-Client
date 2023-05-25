import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { RxUpdate } from "react-icons/rx";
import useTitle from "../../hooks/useTitle";

const UpdateToy = () => {
    const { user } = useContext(AuthContext);
    const eachToy = useLoaderData();
    const { _id, photo, name, category, price, rating, quantity, details } = eachToy;
    useTitle('Update Toy');
    const handleUpdateToy = event => {
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
        const updateToy = { photo, name, seller, email, category, price, rating, quantity, details }

        fetch(`https://assignment-11-server-sigma-eight.vercel.app/toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset();
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Info Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="mt-4">
            <div className="d-flex align-items-center justify-content-center mb-4">
                <RxUpdate style={{ fontSize: "1.8rem", color: "#569153" }}></RxUpdate>
                <h2 className="text-center fst-italic fw-bolder" style={{ color: "#569153" }}>Update Toy</h2>
            </div>
            <Form onSubmit={handleUpdateToy}>
                <div className="d-flex mb-4 gap-5">
                    <div style={{ backgroundColor: "#569153" }} className="form-control md:w-1/2 ms-3">
                        <Form.Group>
                            <Form.Label style={{ color: "#182917" }} className="label-text fst-italic fw-bold">Toy Picture</Form.Label>
                            <Form.Control style={{ border: "2px solid #569153", borderRadius: "8px" }} defaultValue={photo} type="text" name="photo" className="input input-bordered w-full" />
                        </Form.Group>
                    </div>
                    <div style={{ backgroundColor: "#569153" }} className="form-control md:w-1/2 me-3">
                        <Form.Group>
                            <Form.Label style={{ color: "#182917" }} className="label-text fst-italic fw-bold">Toy Name</Form.Label>
                            <Form.Control style={{ border: "2px solid #569153", borderRadius: "8px" }} defaultValue={name} type="text" name="name" className="input input-bordered w-full" />
                        </Form.Group>
                    </div>
                </div>
                <div className="d-flex mb-4 gap-5">
                    <div style={{ backgroundColor: "#569153" }} className="form-control md:w-1/2 ms-3">
                        <Form.Group>
                            <Form.Label style={{ color: "#182917" }} className="label-text fst-italic fw-bold">Seller Name</Form.Label>
                            <Form.Control style={{ border: "2px solid #569153", borderRadius: "8px" }} defaultValue={user?.displayName} type="text" name="seller" className="input input-bordered w-full" disabled />
                        </Form.Group>
                    </div>
                    <div style={{ backgroundColor: "#569153" }} className="form-control md:w-1/2 me-3">
                        <Form.Group>
                            <Form.Label style={{ color: "#182917" }} className="label-text fst-italic fw-bold">Seller Email</Form.Label>
                            <Form.Control style={{ border: "2px solid #569153", borderRadius: "8px" }} defaultValue={user?.email} type="email" name="email" className="input input-bordered w-full" disabled />
                        </Form.Group>
                    </div>
                </div>
                <div className="d-flex mb-4 gap-5">
                    <div style={{ backgroundColor: "#569153" }} className="form-control md:w-1/2 ms-3">
                        <Form.Group>
                            <Form.Label style={{ color: "#182917" }} className="label-text fst-italic fw-bold">Sub-Category</Form.Label>
                            <Form.Select style={{ border: "2px solid #569153", borderRadius: "8px" }} defaultValue={category} name="category" className="input input-bordered w-full">
                                <option>Teddy Bear</option>
                                <option>Horse</option>
                                <option>Dinosaur</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div style={{ backgroundColor: "#569153" }} className="form-control md:w-1/2 me-3">
                        <Form.Group>
                            <Form.Label style={{ color: "#182917" }} className="label-text fst-italic fw-bold">Price</Form.Label>
                            <Form.Control style={{ border: "2px solid #569153", borderRadius: "8px" }} defaultValue={price} type="text" name="price" className="input input-bordered w-full" />
                        </Form.Group>
                    </div>
                </div>
                <div className="d-flex mb-4 gap-5">
                    <div style={{ backgroundColor: "#569153" }} className="form-control md:w-1/2 ms-3">
                        <Form.Group>
                            <Form.Label style={{ color: "#182917" }} className="label-text fst-italic fw-bold">Rating</Form.Label>
                            <Form.Control style={{ border: "2px solid #569153", borderRadius: "8px" }} defaultValue={rating} type="text" name="rating" className="input input-bordered w-full" />
                        </Form.Group>
                    </div>
                    <div style={{ backgroundColor: "#569153" }} className="form-control md:w-1/2 me-3">
                        <Form.Group>
                            <Form.Label style={{ color: "#182917" }} className="label-text fst-italic fw-bold">Available Quantity</Form.Label>
                            <Form.Control style={{ border: "2px solid #569153", borderRadius: "8px" }} defaultValue={quantity} type="text" name="quantity" className="input input-bordered w-full" />
                        </Form.Group>
                    </div>
                </div>
                <div className="d-flex mb-4 gap-5">
                    <div style={{ backgroundColor: "#569153" }} className="form-control md:w-1/2 mx-3">
                        <Form.Group>
                            <Form.Label style={{ color: "#182917" }} className="label-text fst-italic fw-bold">Details</Form.Label>
                            <Form.Control style={{ border: "2px solid #569153", borderRadius: "8px" }} defaultValue={details} type="text" name="details" className="input input-bordered w-full" />
                        </Form.Group>
                    </div>
                </div>
                <div className="d-grid">
                    <Button className="button-log mx-3" type="submit" size="lg">
                        Update Toy Information
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default UpdateToy;