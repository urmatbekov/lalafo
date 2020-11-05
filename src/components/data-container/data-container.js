import React, {Component} from 'react';
import {DataProvider} from "./provider";

class DataContainer extends Component {
    state = {
        data: [],
        loading: true
    }
    addProduct = (item) => {
        const form = new FormData()
        form.append('image', item.image)
        form.append('title', item.title)
        form.append('price', item.price)
        fetch('https://nurkadyr.pythonanywhere.com/product/', {
            method: 'POST',
            body: form
        }).then((res) => res.json()).then((item) => {
            this.setState(({data}) => {
                return {data: [...data, {...item}]}
            })
        })
    }

    deleteProduct = (id) => {
        fetch('https://nurkadyr.pythonanywhere.com/product/' + id, {
            method: 'DELETE'
        }).then(() => {
            this.setState(({data}) => {
                const index = data.findIndex((item) => item.id === id)
                if (index === -1) {
                    return {}
                }
                return {data: [...data.slice(0, index), ...data.slice(index + 1)]}
            })
        })
    }

    componentDidMount() {
        fetch('https://nurkadyr.pythonanywhere.com/product/').then((res) => {
            return res.json()
        }).then((data) => {
            this.setState({data: data.results,loading:false})
        })
    }

    render() {
        const {data,loading} = this.state
        const deleteProduct = this.deleteProduct
        const addProduct = this.addProduct
        let content = null
        if (!loading){
            content = this.props.children
        }

        return (
            <DataProvider value={{data, addProduct, deleteProduct}}>
                {content}
            </DataProvider>
        );
    }
}

export default DataContainer;