import React, {Component} from 'react';
import ProductsItem from "./products-item";
import './products.css'
import {connect} from "react-redux";
import {deleteProduct, getProduct} from "../actions";

class Products extends Component {
    componentDidMount() {
        this.props.getProduct()
    }
    render() {
        return (
            <section>
                <h2>Products</h2>
                <ul className="row products">
                    {this.props.data.map((item) => (
                        <ProductsItem key={item.id} {...item} deleteProduct={this.props.deleteProduct}/>
                    ))}
                </ul>
            </section>
        );
    }
}

const mapStateToProps = ({data}) => {
    return {data}
}

const mapActionsToProps = (dispatch) => {
    return {
        getProduct:getProduct(dispatch),
        deleteProduct:deleteProduct(dispatch)
    }
}


export default connect(mapStateToProps,mapActionsToProps)(Products);