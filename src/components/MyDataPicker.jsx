import React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DatePicker from "react-datepicker/es";
import Image from "react-bootstrap/Image";

const MyDataPicker = ({handleChange, startDate}) => (
    <Row>
        <Col className='justify-content-space-between ' style={{whiteSpace: 'nowrap'}}>
            <label className='lab'>
                <div className='block justify-content-space-between'>
                   <div className='one-div'>
                    <DatePicker
                        className="myDataPicker picker"
                        selected={startDate}
                        onChange={handleChange}
                        minDate={new Date()}
                    />
                    <Image alt='' className='data-img' src="https://img.icons8.com/ultraviolet/40/000000/today.png"
                        style={{pointerEvents: 'none', marginBottom: '5px', height: '50px', width: '50px', border: '1px solid #fff'}}
                    />
                    </div>
                    <DatePicker
                        className=" pickerTime"
                        selected={startDate}
                        onChange={handleChange}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        dateFormat="h:mm aa"
                        timeCaption="Time"
                    />
                </div>
            </label>
        </Col>
    </Row>

);
export default MyDataPicker;