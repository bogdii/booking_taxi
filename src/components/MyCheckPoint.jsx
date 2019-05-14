import React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import MySelector from "./MySelector";

const MyCheckPoint = ({onCheckPoint, isCheckClick,}) => (
                    <Row>
                    <Col xs={4}>
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check
                                style={{color: 'white'}}
                                type="checkbox"
                                label={isCheckClick ? "Per-hour booking for" : "Per-hour booking"}
                                onChange={onCheckPoint}/>
                        </Form.Group>
                    </Col>
                    {isCheckClick ? <MySelector
                        img={'https://img.icons8.com/ultraviolet/40/000000/time.png'}
                        item={[0, 1, 2]}

                    /> : ''}


                </Row>

);
export default MyCheckPoint;