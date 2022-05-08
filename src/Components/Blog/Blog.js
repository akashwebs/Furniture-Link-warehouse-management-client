import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container my-5'>
            <h3 className='text-center my-3'>Blogs</h3>
            <Row xs={1} md={2} className='g-3'>
                <Col>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam totam repudiandae dicta quod eveniet, a necessitatibus. Accusamus dolorem, quibusdam ex ullam placeat aspernatur unde! Consectetur nisi similique, quis dignissimos quidem perferendis corporis. Odit a placeat corrupti ut dolores accusantium dolorem.</div>
                </Col>
                <Col>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam totam repudiandae dicta quod eveniet, a necessitatibus. Accusamus dolorem, quibusdam ex ullam placeat aspernatur unde! Consectetur nisi similique, quis dignissimos quidem perferendis corporis. Odit a placeat corrupti ut dolores accusantium dolorem.</div>
                </Col>
            </Row>
        </div>
    );
};

export default Blog;