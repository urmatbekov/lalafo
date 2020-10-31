import React, {Component, Fragment} from 'react';
import ProductsItem from "./products-item";
import './products.css'
import data from "./data";
import AddForm from "../add-form";

class Products extends Component {
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
        return (
            <Fragment>
                <AddForm addProduct={this.addProduct}/>
                <section>
                    <h2>Products</h2>
                    <ul className="row products">
                        {this.state.data.map((item) => (
                            <ProductsItem key={item.id} {...item}/>
                        ))}
                    </ul>
                </section>
            </Fragment>
        );
    }
}

export default Products;