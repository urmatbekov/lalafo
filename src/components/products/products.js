import React, {Component} from 'react';
import ProductsItem from "./products-item";
import './products.css'

class Products extends Component {
    render() {
        return (
            <section>
                <h2>Products</h2>
                <ul className="row products">
                    <ProductsItem title={"Televizor"} image={'/img/televizor.jpg'}/>
                    <ProductsItem title={"Televizor"} image={'/img/televizor.jpg'}/>
                    <ProductsItem title={"Televizor"} image={'/img/televizor.jpg'}/>
                    <ProductsItem title={"Televizor"} image={'/img/televizor.jpg'}/>
                    <ProductsItem title={"Televizor"} image={'/img/televizor.jpg'}/>
                    <ProductsItem title={"Televizor"} image={'/img/televizor.jpg'}/>
                    <ProductsItem title={"Televizor"} image={'/img/televizor.jpg'}/>
                    <ProductsItem title={"Televizor"} image={'/img/televizor.jpg'}/>
                    <ProductsItem title={"Televizor"} image={'/img/televizor.jpg'}/>
                </ul>
            </section>
        );
    }
}

export default Products;