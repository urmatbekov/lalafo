import React, {Component} from 'react';
import "./products-item.css"

class ProductsItem extends Component {
    render() {
        const {title, image, price, deleteProduct} = this.props;
        return (
            <div className="col-md-4">
                <li className="product-item">
                    <h3>{title}</h3>
                    <img src={image} alt={""}/>
                    <p>Price: <span>{price}$</span>
                        <button onClick={()=> deleteProduct(this.props.id)} className='btn btn-danger delete-button'>x</button>
                        <button className="btn btn-danger buy-button">Купить</button>

                    </p>

                </li>
            </div>
        );
    }
}

export default ProductsItem;