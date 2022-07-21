import { DECREMENT_QTY, GET_PRODUCTS_DATA, INCREMENT_QTY } from "../actions/action"


const init={
    ProductsData:[]
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
        default:
            return state
    }
}
export default reducer