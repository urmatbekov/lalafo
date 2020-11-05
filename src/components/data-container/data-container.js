import React, {Component} from 'react';
import {DataProvider} from "./provider";

class DataContainer extends Component {
    state = {
        data: []
    }
    startId = 100;
    addProduct = (item) => {
        this.startId += 1
        this.setState(({data}) => {
            return {data: [...data, {...item}]}
        })
    }

    deleteProduct = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex((item) => item.id === id)
            if (index === -1) {
                return {}
            }
            return {data: [...data.slice(0, index), ...data.slice(index + 1)]}
        })
    }

    componentDidMount() {
        fetch('https://nurkadyr.pythonanywhere.com/product/').then((res) => {
            return res.json()
        }).then((data) => {
            this.setState({data: data.results})
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