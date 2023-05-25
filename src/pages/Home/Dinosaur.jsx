import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';

const Dinosaur = () => {
    const notify = () => toast("You've to Login First!");
    const [values, setValue] = useState(['']);
    useEffect(() => {
        fetch('https://assignment-11-server-sigma-eight.vercel.app/catThree', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setValue(data);
            })
    }, [])
    return (
        <div>
            {
                values.map(value => <Card className="ms-auto me-5" key={value._id} style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={value.photo} style={{ height: "200px" }} />
                    <Card.Body>
                        <Card.Title>{value.name}</Card.Title>
                        <Card.Text>{value.price}</Card.Text>
                        <Card.Text>{value.rating}</Card.Text>
                        <Link to={`/view/${value._id}`}><Button onClick={notify} variant="success">View Details</Button></Link>
                        <ToastContainer />
                    </Card.Body>
                </Card>)
            }
        </div>
    );
}

export default Dinosaur;