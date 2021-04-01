import { BUY_CAKE} from "./../constants/constants";


const initialState = {
    numOfCakes:10
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes:state.numOfCakes-1
            }
        default:
            return state;
    }
}

export default cakeReducer

//reducer takes the state and the action and returns the new(updated) state but while using react as well as redux must keep in mind that
// mutation shuld not be caused .
//else react wont rerender considring nothing has changed.

// whenever dispatch an action reducer is called internally.