const initialState = {
    products: [],
    cart: [],
    cartTotal: 0,
    currentUser: [],
    currentOrder: [],
    loading: false,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_PRODUCTS_REQUEST":
            return {
                ...state,
                products: [...state.products],
                loading: true,
            };

        case "FETCH_PRODUCTS":
            console.log(action.products)
            return {
                ...state,
                products: action.products,
                loading: false,
            };

        case "ADD_PRODUCT_REQUEST":
            return {
                ...state,
                products: [...state.products],
                loading: true,
            };
        
        case "ADD_PRODUCT":
            return {
                ...state,
                products: [...state.products, action.data],
                loading: false
            };

        case "EDIT_PRODUCT":
            return {
                ...state,
                products: [...state.products.filter(item=> item.id !== action.id), action.data],
                loading: false
            };

        case "DELETE_PRODUCT":
            let pr = state.products.filter(item => item.id !== action.id);
            alert("Deleted Product")
            return {
                ...state,
                products: pr,
                loading: false
            };

        case "ADD_TO_CART":  
            return {
                ...state,
                cart: [...state.cart, action.product],
                cartTotal: state.cartTotal + action.product.price,
                loading: false,
            };

        case "REMOVE_FROM_CART":
            let removeProduct = state.cart.find(item => item.id === action.id)
            let newCartProducts = state.cart.filter(item => item.id !== action.id)
            return {
                ...state,
                cart: newCartProducts, 
                cartTotal: state.cartTotal - removeProduct.price,
                loading: false,
            };

        case 'SET_CURRENT_USER':
            return {
                ...state, 
                currentUser: action.user, 
                loading: false
            };

        case 'LOGOUT':
            return {
                ...state, 
                currentUser: [], 
                loading: false
            };
         
        case "CREATE_ORDER":
            return {
                ...state, 
                currentOrder: action.data.id, 
                loading: false 
            };

        case "SUBMIT_ORDER":
            return {
                ...state, 
                currentOrder: [], 
                cart: [],
                cartTotal: 0,
                loading: false
            };

        default:
            return state;
    }
}

export default rootReducer