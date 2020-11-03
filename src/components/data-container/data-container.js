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

    deleteProduct = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex((item) => item.id === id)
            return {data: [...data.slice(0, index), ...data.slice(index + 1)]}
        })
    }

    render() {
        const {data} = this.state
        const deleteProduct = this.deleteProduct
        const addProduct = this.addProduct
        return (
            <DataProvider value={{data, addProduct, deleteProduct}}>
                {this.props.children}
            </DataProvider>
        );
    }
}

export default DataContainer;