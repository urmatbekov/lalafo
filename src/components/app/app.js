import React, {Component} from 'react';
import Header from "../header";
import Main from "../main";
import {Container} from "react-bootstrap";
import './app.css'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import AddForm from "../add-form";
import ProductDetail from "../product-detail/product-detail";



class App extends Component {


    render() {
        return (
            <Router>
                <div className="parent-container">
                    <Container>
                        <Header/>
                        <Switch>
                            <Route exact path={'/'}>
                                <Main/>
                            </Route>
                            <Route exact path={'/add'}>
                                <AddForm/>
                            </Route>
                            <Route exact path="/product/:name">
                                <ProductDetail/>
                            </Route>
                        </Switch>
                    </Container>
                </div>
            </Router>
        );
    }
}


export default App;