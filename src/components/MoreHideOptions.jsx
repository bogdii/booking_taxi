import React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Collapse from "react-bootstrap/Collapse";
import MySelector from "./MySelector";
import MyCheckPoint from './MyCheckPoint';

const MoreHideOptions = ({onClickShowMore, isShowMore, mySelectorOptions,isCheckClick, onCheckPoint}) => (
    <div>
        <Row className='marg'>
            <Col md={7} style={{textAlign: 'left'}}>
                <small className='small-txt'>For 1-2 passengers with 1-2 bags</small>
            </Col> <Col  style={{color: '#FF4800'}}
                        className='d-flex justify-content-end'>
            <div
                style={{cursor: 'pointer'}}
                onClick={onClickShowMore}
                aria-controls="example-collapse"

            >
                {!isShowMore ? <small>more options</small> : <small>hide options</small>}
            </div>
        </Col>
        </Row>
        <Collapse in={isShowMore}>
            <div id="example-collapse">
                <Row>
                    {mySelectorOptions.map((val, key) => {
                        return <MySelector key={key} img={val.img} item={val.item}  />
                    })}
                </Row>
                <MyCheckPoint isCheckClick={isCheckClick} onCheckPoint={onCheckPoint}/>

            </div>
        </Collapse>
    </div>
);
export default MoreHideOptions;