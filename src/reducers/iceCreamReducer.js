import { BUY_ICECREAM } from './../constants/constants'


const initialState = {
    numOfIceCream:10
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCream:state.numOfIceCream-1
        }
        default : return state
    }
}

export default iceCreamReducer