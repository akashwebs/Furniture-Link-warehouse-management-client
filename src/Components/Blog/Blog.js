import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container my-5'>
            <h3 className='text-center my-3'>Blogs</h3>
            <Row xs={1} md={2} className='g-3'>
                <Col>
                    <h3> Difference between javascript and nodejs?</h3>
                    <div>
                        <p><strong>Javascript: </strong>Javscript is a simple programming language.JavaScript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage. JavaScript is also commonly used in game development and mobile app development.</p>

                        <p><strong>Nodejs: </strong>Node js is a javascript runtime bulit on javascript v8 engine.On the other hand, Node.js usually represents a list of objects and methods accessible to JavaScript code when run in the V8 engine or via the node interpreter.It provides a cross-platform runtime environment with event-driven, non-blocking (asynchronous) I/O for creating highly scalable server-side JavaScript applications. </p>
                    </div>
                </Col>
                <Col>
                <h3>When should you use nodejs and when should you use mongodb?</h3>
                    <div>
                        <p><strong>when use nodejs: </strong> 
                        where you'd like to maintain a persistent connection from the browser back to the server. Using a technique known as "long-polling", you can write an application that sends updates to the user in real time.This means you can create a browser-based chat application in Node.js that takes almost no system resources to serve a great many clients. Any time you want to do this sort of long-polling, Node.js is a great option.
                        </p>
                        <p><strong>when use mongodb: </strong> 
                        MongoDB is a general-purpose database used in various ways to support applications in many different industries (e.g., telecommunications, gaming, finances, healthcare, and retail). MongoDB has found a home in many different businesses and functions because it solves long-standing problems in data management and software development. Typical use cases for MongoDB include:
                        </p>
                    </div>
                </Col>
                <Col>
                <h3>Differences between sql and nosql databases?</h3>
                    <div>
                        <p><strong>sql: </strong> 
                        RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).These databases have fixed or static or predefined schema.These databases are not suited for hierarchical data storage.These databases are best suited for complex queries.Vertically Scalable
                        </p>
                        <p><strong>noSQL: </strong> 
                        Non-relational or distributed database system.They have dynamic schema.These databases are best suited for hierarchical data storage.These databases are not so good for complex queries.Horizontally scalable.
                        </p>
                    </div>
                </Col>
                <Col>
                <h3>What is the purpose of jwt and how does it work?</h3>
                    <div>
                        <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. JSON Web Token is a standard used to create access tokens for an application.It works this way: the server generates a token that certifies the user identity, and sends it to the client.The client will send the token back to the server for every subsequent request, so the server knows the request comes from a particular identity.
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Blog;