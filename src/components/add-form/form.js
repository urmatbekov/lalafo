import React from "react";
import {Field, reduxForm} from "redux-form";

const customField = ({input, label, type, id, meta: {touched, error, warning}}) => {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input id={id} className={"form-control"} {...input} type={type}/>
        </div>
    )
}
const UploadFile = ({input: {value: omitValue, ...inputProps}, meta: omitMeta, id, label, ...props}) => (


    <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <input id={id} type='file' {...inputProps} {...props} />
    </div>

);

const Form = ({handleSubmit, change}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field label="Title" name="title" type="text" id="Title" component={customField}/>
            <Field label="Price" name="price" type="number" id="Price" component={customField}/>
            <Field label="Image" name="image" type="file" id="Image" component={UploadFile}/>
            <button className="btn btn-success">Save</button>
        </form>
    )
}

export default reduxForm({
    form: "addForm"
})(Form);