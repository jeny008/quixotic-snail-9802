import { ADD_PRODUCT, DECREMENT_QTY, GET_CART_DATA, GET_PRODUCTS_DATA, INCREMENT_QTY, LOGIN, OTPAUTH, REGISTRATION } from "../actions/action"


const init={
    ProductsData:[],
    Auth:[],
    CartData:[],
    total: null
}

const reducer=(state=init, action)=>{
    switch(action.type){
        case GET_PRODUCTS_DATA:
            return{
                ...state,
                ProductsData:action.payload
            }
        case GET_CART_DATA: 
        console.log("reducer:", action.payload)
            return {
                ...state,
                CartData: action.payload,
                total: action.payload[0].cartItems.reduce((accumulator, currentValue) => {
                    return accumulator + currentValue.Price * currentValue.quantity;
                }, 0),
            }    
        case INCREMENT_QTY:
            return{
                ...state,
                ProductsData:action.payload,
                CartData: state.CartData
            }
        case DECREMENT_QTY:
            return{
                ...state,
                ProductsData:action.payload
            }
        case LOGIN:
            return {
                ...state,
                Auth:action.payload
            }
        case REGISTRATION:
            return {
                ...state,
                Auth:action.payload
            }
         case ADD_PRODUCT:
            return {
                ...state,
                Auth:action.payload
            }
        default:
            return state
    }
}
export default reducer