import React, {Component} from 'react';
import {connect} from "react-redux";
import {addProduct} from "../actions";
import Form from "./form";

class AddForm extends Component {


    onSubmit = (value) => {
        this.props.addProduct(value)
    }


    render() {
        return (
            <div className="m-auto" style={{width: "600px"}}>
                <Form onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

const mapActionsToProps = (dispatch) => {
    return {addProduct: addProduct(dispatch)}
}

export default connect(null, mapActionsToProps)(AddForm);