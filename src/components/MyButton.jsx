import React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const MyButton = () => (
    <Row>
        <Col sm={8}>
           <div className="fab fa-500px"></div>
            <Button variant="danger" className='orange-btn' size="lg" block>
                Start booking
            </Button>
        </Col>
    </Row>

);
export default MyButton;