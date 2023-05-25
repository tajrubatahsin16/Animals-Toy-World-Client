import React from "react";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
    useTitle('Blogs');
    return (
        <div>
            <h2 className="text-center fw-bold fs-2 my-3" style={{color: "#182917"}}>Welcome To The Blogs</h2>
            <div className="mx-3 d-flex gap-4 text-center">
                <div className="p-3 rounded" style={{ border: "2px solid #182917" }}>
                    <h3 className="fw-bold fs-4">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                    <p className="fst-italic">
                        A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times . The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.
                        Access token and refresh token shouldn't be stored in the local/session storage, because they are not a place for any sensitive data. Hence they should be stored in a httpOnly cookie.
                    </p>
                </div>
                <div className="p-3 rounded" style={{ border: "2px solid #182917" }}>
                    <h3 className="fw-bold fs-4">Compare SQL and NoSQL databases?</h3>
                    <p className="fst-italic">
                        SQL databases are vertically scalable, while NoSQL databases are horizontally scalable . SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                    </p>
                </div>
                <div className="p-3 rounded" style={{ border: "2px solid #182917" }}>
                    <h3 className="fw-bold fs-4">What is express js? What is Nest JS?</h3>
                    <p className="fst-italic">
                        Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.

                        Nest. js is one of the fastest-growing nodes. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js . It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.
                    </p>
                </div>
                <div className="p-3 rounded" style={{ border: "2px solid #182917" }}>
                    <h3 className="fw-bold fs-4">What is MongoDB aggregate and how does it work?</h3>
                    <p className="fst-italic">
                        Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages . The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Blogs;