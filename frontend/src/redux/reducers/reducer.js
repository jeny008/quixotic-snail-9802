import { DECREMENT_QTY, GET_PRODUCTS_DATA, INCREMENT_QTY, LOGIN, OTPAUTH, REGISTRATION } from "../actions/action"


const init={
    ProductsData:[],
    Auth:[]
}

const reducer=(state=init, action)=>{
    switch(action.type){
        case GET_PRODUCTS_DATA:
            return{
                ...state,
                ProductsData:action.payload
            }
        case INCREMENT_QTY:
            return{
                ...state,
                ProductsData:action.payload
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
        case OTPAUTH:
            return {
                ...state,
                Auth:action.payload
            }
        case REGISTRATION:
            return {
                ...state,
                Auth:action.payload
            }
        default:
            return state
    }
}
export default reducer