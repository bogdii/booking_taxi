import React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const MyButton = () => (
    <Row>
        <Col sm={8}>
            <Button variant="danger" className='orange-btn' size="lg" block>
                Start booking
            </Button>
        </Col>
    </Row>

);
export default MyButton;