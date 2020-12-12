import {combineReducers} from "redux";
import listProduct from "./list-product";
import {reducer as formReducer} from 'redux-form'

const reduce = combineReducers({
    listProduct,
    form:formReducer
})

export default reduce;