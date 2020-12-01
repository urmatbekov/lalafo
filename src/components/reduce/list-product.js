const initialState = {
    data: {
        count: 0,
        results: []
    }
}

const listProduct = (state = initialState, action) => {

    switch (action.type) {
        case "LOAD" : {
            return {data: action.payload, loading: false}
        }
        case "ADD" : {
            return {data: [...state.data, action.payload]}
        }
        case "DELETE": {
            const index = state.data.findIndex((item) => item.id === action.payload)
            if (index === -1) {
                return {...state}
            }
            return {data: [...state.data.slice(0, index), ...state.data.slice(index + 1)]}
        }
        default: {
            return state
        }
    }


    //
    // if (action.type === "LOAD") {
    //     return {data: action.data, loading: false}
    // } else if (action.type === "DELETE") {
    //     const index = state.data.findIndex((item) => item.id === action.id)
    //     if (index === -1) {
    //         return {...state}
    //     }
    //     return {data: [...state.data.slice(0, index), ...state.data.slice(index + 1)]}
    // }
}

export default listProduct