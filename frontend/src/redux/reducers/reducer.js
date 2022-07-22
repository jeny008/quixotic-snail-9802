import { GET_PRODUCTS_DATA } from "../actions/action"


const init={
    ProductsData:[],
    productOne:{},
}

const reducer=(state=init, action)=>{
    switch(action.type){
        case GET_PRODUCTS_DATA:
            return{
                ...state,
                ProductsData:action.payload
            }
        default:
            return state
    }
}
export default reducer