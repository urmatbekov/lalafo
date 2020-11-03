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
<<<<<<< HEAD
                        <button onClick={()=> deleteProduct(this.props.id)} className='btn btn-danger delete-button'>x</button>
=======
                        <button onClick={()=>deleteProduct(this.props.id)} className='btn btn-danger delete-button'>x</button>
>>>>>>> 998d3562888d797350f5cab8786778c019ddfee3
                        <button className="btn btn-danger buy-button">Купить</button>

                    </p>
<<<<<<< HEAD

=======
>>>>>>> 998d3562888d797350f5cab8786778c019ddfee3
                </li>
        );
    }
}

export default ProductsItem;