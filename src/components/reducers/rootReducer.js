
const initialState = {
    products: [],
    cart: [],
    cartTotal: 0,
    currentUser: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {...state, currentUser: action.data, loading: false};
            
            case "CREATE_ORDER":
            return {...state, 
                currentOrder: action.order.id, loading: false }
                ;

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
    
        case "ADD_TO_CART":
            let price = action.product.price
            console.log(price)
            return {
            ...state,
            cart: [...state.cart, action.product],
            cartTotal: state.cartTotal + price,
            loading: false,
            };

            case "REMOVE_FROM_CART":
                let new_product = state.cart.filter(item=> item.id === action.id)
                let new_products = state.cart.filter(item=> action.id !== item.id)
                return {
                ...state,
                cart: new_products, 
                cartTotal: state.cartTotal - new_product.price,
                loading: false,
                };

    default:
        return state;
    }
}

export default rootReducer;