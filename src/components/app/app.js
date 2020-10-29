import React, {Component} from 'react';
import Header from "../header";
import Main from "../main";
import {Container} from "react-bootstrap";
import './app.css'

class App extends Component {
    render() {
        return (
            <div className="parent-container">
                <Container>
                    <Header/>
                    <Main/>
                </Container>
            </div>
        );
    }
}

export default App;