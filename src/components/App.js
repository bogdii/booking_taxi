import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import MyButton from './MyButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './styles/App.css';
import MyInput from "./MyInput";
import MoreHideOptions from "./MoreHideOptions";
import MyDataPicker from "./MyDataPicker";

class App extends Component {
    state = {
        isShowMore: false,
        startDate: new Date(),
        isCheckClick: false,
        mySelectorOptions: [
            {
                img: 'https://img.icons8.com/ultraviolet/40/000000/passenger.png',
                item: [1, 2, 3, 4, 5, 6, 7, 8]
            },
            {
                img: 'https://img.icons8.com/ultraviolet/40/000000/briefcase.png',
                item: [0, 1, 2, 3, 4, 5, 6, 7, 8]
            },
            {
                img: 'https://img.icons8.com/ultraviolet/40/000000/golf-bag.png',
                item: [0, 1, 2, 3]
            },
            {
                img: 'https://img.icons8.com/ultraviolet/40/000000/corgi.png',
                item: [0, 1, 2, 3, 4]
            },
            {
                img: 'https://img.icons8.com/ultraviolet/40/000000/children.png',
                item: [0, 1, 2]
            },

        ]
    };

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    onClickShowMore() {
        this.setState({isShowMore: !this.state.isShowMore});
    }

    onCheckPoint() {
        this.setState({isCheckClick: !this.state.isCheckClick})
    }

    render() {
        return (
            <div className='App'  style={{background: '#D2D6D9', height: '100vh', width:'100vw'}}>
                <Container>
                    <Row className='justify-content-md-center'>
                        <Col sm={6}>
                            <Form style={{maxWidth: '600px', marginTop: '50px', minWidth: '300px'}}>
                                <MyInput placeholder="Pick up:"/>
            
                                <MyInput placeholder="Destination:"/>
                                <MyDataPicker handleChange={this.handleChange.bind(this)}
                                              startDate={this.state.startDate}/>
                                <MyInput placeholder="Voucher code (optional):" overlayTrigger={false}/>
                                <MoreHideOptions onClickShowMore={this.onClickShowMore.bind(this)}
                                                 isShowMore={this.state.isShowMore}
                                                 mySelectorOptions={this.state.mySelectorOptions}
                                                 isCheckClick={this.state.isCheckClick}
                                                 onCheckPoint={this.onCheckPoint.bind(this)}
                                />
                                <MyButton/>
                            </Form>

                        </Col>
                    </Row>


                </Container>
            </div>
        );
    }
}

export default App;
