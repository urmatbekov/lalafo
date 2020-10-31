import React, {Component, Fragment} from 'react';
import ProductsItem from "./products-item";
import './products.css'
import {DataConsumer} from "../data-container/provider";

class Products extends Component {
    render() {
        return (
            <section>
                <h2>Products</h2>
                <ul className="row products">
                    <DataConsumer>
                        {
                            ({data}) => {
                                return data.map((item) => (
                                    <ProductsItem key={item.id} {...item}/>
                                ))
                            }
                        }
                    </DataConsumer>
                </ul>
            </section>
        );
    }
}

export default Products;