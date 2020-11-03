import React, {Component} from 'react';
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
                            ({data, deleteProduct}) => {
                                return data.map((item) => (
                                    <ProductsItem deleteProduct={deleteProduct}  key={item.id} {...item}/>
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