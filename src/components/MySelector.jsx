import React from 'react';
import Col from "react-bootstrap/Col";
import InputGroup from 'react-bootstrap/InputGroup';
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";

const onClickSelector =() =>{

}

const MySelector = ({ img, item}) => (
                                    <Col xs={4} >

                                        <InputGroup style={{height: '38px',marginBottom:'5px'}}>
                                            <InputGroup.Prepend>
                                                <Image alt=''
                                                       src={img}
                                                       style={{pointerEvents: 'none'}}/>

                                            </InputGroup.Prepend>

                                            <Form.Control className='mySelector' as="select">

                                                {item.map((val,key) =>{
                                                    return <option key={key} >{val} </option>
                                                })}

                                            </Form.Control>
                                        </InputGroup>
                                    </Col>

);
export default MySelector;