
const initialState = {
    products: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
    case "ADD_PRODUCT_REQUEST":
        return {
          ...state,
          products: [...state.products],
          loading: true,
        };

    case "ADD_PRODUCT":
        return {
        ...state,
        products: action.data,
        loading: false,
        };

    case "FETCH_PRODUCTS_REQUEST":
            return {
            ...state,
            products: [...state.products],
            loading: false,
            };

    case "FETCH_PRODUCTS":
        console.log(action.products)
        return {
        ...state,
        products: action.products,
        loading: false,
        };

    default:
        return state;
    }
}

export default rootReducer;