import React, {Component} from 'react';
import ProductsItem from "./products-item";

class Products extends Component {
    render() {
        return (
            <section>
                <h2>Products</h2>
                <ul>
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