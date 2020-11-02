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
import {DataConsumer} from "../data-container/provider";
import ProductsItem from "../products/products-item";

class App extends Component {
    deleteProduct = (item) => {
        this.setState(({data}) => {
            const index = data.findIndex((item) => item.id===id)
            return {data: [...data,slice(0, index), ...data.slice(index+1)]}
        })
    }
    render() {
        return (
            <Router>
                <div className="parent-container">
                    <Container>
                        <Header/>
                        <Switch>
                            <Route exact path={'/products/products-item'}>
                                <Main/>
                                <DataConsumer>
                                    {({deleteProduct}) => <ProductsItem deleteProduct={this.deleteProduct}/>}
                                </DataConsumer>
                            </Route>
                            <Route exact path={'/add'}>
                                <DataConsumer>
                                    {({addProduct}) => <AddForm addProduct={addProduct}/>}

                                </DataConsumer>
                            </Route>
                        </Switch>
                    </Container>
                </div>
            </Router>
        );
    }
}

export default App;