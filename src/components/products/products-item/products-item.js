import React, {Component} from 'react';
import "./products-item.css"

class ProductsItem extends Component {
    render() {
        const {title, image, price, deleteProduct} = this.props;
        return (
                <li className="product-item col-md-4">
                    <h3 className="product-title" title={title}>{title}</h3>
                    <img src={image} alt={""}/>
                    <p>Price: <span>{price}$</span>
                        <button onClick={()=>deleteProduct(this.props.id)} className='btn btn-danger delete-button'>x</button>
                        <button className="btn btn-danger buy-button">Купить</button>
                    </p>
                </li>
        );
    }
}

export default ProductsItem;