import React, { Component, useState  } from 'react'
import {Row, Col, Button, Card} from 'react-bootstrap';

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.state = { text: [] };
    }

    handleChange(event) {
        this.setState({value: event.target.value });
    }
    
    // Envia el texto a invertir
    sendText = () => {
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
        }
        fetch(`http://localhost:3000/api/test?text=${this.state.value}`, requestInit)
        .then(res => res.json())
        .then(res => {
            this.setState({ text: res });
        })
    };
    
    render() {
        return (
            <div>
                <div className="bg-danger p-3">
                    <Row className="align-items-center justify-content-center">
                        <Col sm={4} className="my-1">
                            <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Insert Text" />
                        </Col>
                        <Col xs="auto" className="my-1">
                            <Button onClick={this.sendText}>Send</Button>
                        </Col>
                    </Row>
                </div>
                <div className="bg-light" style={{height: '850px'}}>
                    <div className="container pt-5">
                        <Row className="align-items-center justify-content-center">
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col sm={12} className="my-1">
                                            <h2>Results: </h2>
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center justify-content-center">
                                        <Col sm={8} className="my-1">
                                            <h5>Original text: {this.state.value}</h5>
                                        </Col>
                                        <Col sm={8} className="my-1">
                                            <h5>Reverse: {this.state.text.text ? this.state.text.text : 'No text' }</h5>
                                        </Col>
                                        {this.state.text.text ? 
                                        <Col sm={8} className="my-1">
                                            <h5>{this.state.text.palindrome ? 'Es palindrome' : 'No es palindrome'}</h5>
                                        </Col> : ''}
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;