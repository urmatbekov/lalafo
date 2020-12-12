const initialState = {
    data: {
        count: 0,
        results: []
    },
    loading: false
}

const listProduct = (state = initialState, action) => {

    switch (action.type) {
        case "SET_REQUEST": {
            return {...state, loading: true}
        }
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
}

export default listProduct