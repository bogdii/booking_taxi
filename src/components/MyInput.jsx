import React from 'react';
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import InputGroup from 'react-bootstrap/InputGroup';
import Image from "react-bootstrap/Image";

const MyInput = ({placeholder, overlayTrigger = true}) => (
    <Row>
        <Col>
            <InputGroup className="mb-1">
                    <FormControl placeholder={placeholder} className='input-stl' type="text" />
                    {overlayTrigger ? <div className='box '>
                        <i className="arr-up"/>
                    </div>:''}
                

            </InputGroup>
        </Col>
    </Row>
);
export default MyInput;