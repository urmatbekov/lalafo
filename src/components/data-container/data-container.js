import React, {Component} from 'react';
import data from "../products/data";
import {DataProvider} from "./provider";

class DataContainer extends Component {
    state = {
        data
    }
    startId = 100;
    addProduct = (item) => {
        this.startId += 1
        this.setState(({data}) => {
            return {data: [...data, {...item, id: this.startId, image: '/img/televizor.jpg',}]}
        })
    }

    render() {
        const {data} = this.state
        const addProduct = this.addProduct
        return (
            <DataProvider value={{data, addProduct}}>
                {this.props.children}
            </DataProvider>
        );
    }
}

export default DataContainer;