import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class ProductDetail extends Component {
    render() {
        const id = +this.props.match.params.id
        const item = this.props.data.find((item) => item.id === id)
        return (
            <div className="container">
                <div>
                    <h1>{item.title}</h1>
                    <img style={{width: '400px'}} src={item.image} alt=""/>
                    <p>{item.price} $</p>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(({data})=>({data}))(ProductDetail));