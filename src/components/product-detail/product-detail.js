import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class ProductDetail extends Component {
    render() {
        const name = this.props.match.params.name
        const item = this.props.data.results.find((item) => item.name === name)
        console.log(name)
        console.log(item)
        if (!item){
            return ""
        }
        return (
            <div className="container">
                <div>
                    <h1>{item.title}</h1>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(({data}) => ({data}))(ProductDetail));