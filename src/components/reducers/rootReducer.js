
const initialState = {
    products: [],
    cart: [],
    cartTotal: 0,
    currentUser: [],
    currentOrder: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {...state, currentUser: action.data, loading: false};
         
            case "CREATE_ORDER":
            return {...state, 
                currentOrder: action.order.id, loading: false }
                ;

            case "SUBMIT_ORDER":
            return {...state, 
                currentOrder: [], 
                cart: [],
                cartTotal: 0,
                loading: false,}
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
        products: [...state.products, action.data],
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
            let newProducts = state.products.filter(item=> action.product.id !== item.id)
            let newTotal = state.cartTotal + action.product.price ;
            return {
            ...state,
            cart: [...state.cart, action.product],
            cartTotal: newTotal,
            loading: false,
            products: newProducts
            };

            case "REMOVE_FROM_CART":
                let removeProduct = state.cart.find(item => item.id === action.id)
                let newCartProducts = state.cart.filter(item => item.id !== action.id)
                let newerTotal = state.cartTotal - removeProduct.price
                return {
                ...state,
                cart: newCartProducts, 
                cartTotal: newerTotal,
                loading: false,
                products: [...state.products, removeProduct]
                };

    default:
        return state;
    }
}

export default rootReducer;