
const initialState = {
    products: [],
    cart: [],
    cartTotal: 0,
    currentUser: [],
    currentOrder: [],
    orders: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {...state, currentUser: action.data, loading: false};
            
            case "CREATE_ORDER":
            return {...state, 
                currentOrder: action.order.id, loading: false }
                ;

                case "SEND_ORDER":          
                    return {...state, 
                        cart: [],
                        currentOrder: [],
                        cartTotal: 0,
                        orders: [...state.orders, action.data]
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
            let prod = action.product
            let price = prod.price
            console.log(price)
            let new_products_list = state.products.filter(item=> prod.id !== item.id)

            let newTotal = state.cartTotal + price ;
            console.log(newTotal)
            return {
            ...state,
            cart: [...state.cart, action.product],
            cartTotal: newTotal,
            loading: false,
            products: new_products_list
            };

            case "REMOVE_FROM_CART":
                let new_product = state.cart.find(item=> item.id === action.id)
                let new_products = state.cart.filter(item=> action.id !== item.id)

                let newT = state.cartTotal - new_product.price
                return {
                ...state,
                cart: new_products, 
                cartTotal: newT,
                loading: false,
                products: [...state.products, new_product]
                };

    default:
        return state;
    }
}

export default rootReducer;