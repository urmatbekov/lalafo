import React, {Component} from 'react';

class ProductsItem extends Component {
    render() {
        return (
            <li>
                <h3>{this.props.title}</h3>
                <img src={this.props.image} alt={""}/>
            </li>
        );
    }
}

export default ProductsItem;