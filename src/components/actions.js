import Service from "./service";

const service = new Service()

const deleteItem = (id) => {
    return {
        type: "DELETE",
        payload: id
    }
}
const setRequest = () => {
    return {
        type: 'SET_REQUEST',
    }
}
const loadProduct = (data) => {
    return {
        type: 'LOAD',
        payload: data
    }
}

const addItem = (item) => {
    return {
        type: 'ADD',
        payload: item
    }
}

const getProduct = (dispatch) => (page) => {
    dispatch(setRequest())
    service.getProducts(page).then((data) => {
        dispatch(loadProduct(data))
    })
}

const deleteProduct = (dispatch) => (id) => {
    service.deleteProduct(id).then(() => {
        dispatch(deleteItem(id))
    })
}

const addProduct =(dispatch)=> (item) => {
    service.addProduct(item).then((item) => {
        dispatch(addItem(item))
    })
}

export {getProduct,deleteProduct,addProduct,setRequest}