import React, {Component} from 'react';
import ProductsItem from "./products-item";
import './products.css'
import {connect} from "react-redux";
import {deleteProduct, getProduct} from "../actions";
import PaginationPeople from "../pagination/pagination";
import Locader from "../loader/locader";

class Products extends Component {
    componentDidMount() {
        this.getPage()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.page !== this.props.page) {
            this.getPage()
        }
    }

    getPage = () => {
        const {page} = this.props
        this.props.getProduct(page)
    }


    render() {
        const content = this.props.loading ? <Locader/> : (
            <ul className="row products">
                {this.props.data.results.map((item) => (
                    <ProductsItem key={item.name} {...item} deleteProduct={this.props.deleteProduct}/>
                ))}
            </ul>
        )
        return (
            <section>
                <h2>Products</h2>
                <PaginationPeople page={this.props.page} count={this.props.data.count}/>
                {content}
                <PaginationPeople page={this.props.page} count={this.props.data.count}/>
            </section>
        );
    }
}

const mapStateToProps = ({listProduct: {data, loading}}) => {
    return {data, loading}
}

const mapActionsToProps = (dispatch) => {
    return {
        getProduct: getProduct(dispatch),
        deleteProduct: deleteProduct(dispatch)
    }
}


export default connect(mapStateToProps, mapActionsToProps)(Products);