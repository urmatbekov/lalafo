import React, {Component} from 'react';
import "./products-item.css"

class ProductsItem extends Component {
    render() {
        return (
            <div className="col-md-4">
                <li className="product-item">
                    <h3>{this.props.title}</h3>
                    <img src={this.props.image} alt={""}/>
                    <p>Price: <span>200$</span>
                        <button className="btn btn-danger buy-button">Купить</button>
                    </p>
                </li>
            </div>
        );
    }
}

export default ProductsItem;