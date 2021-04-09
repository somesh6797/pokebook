import { combineReducers } from 'redux'
import cakeReducer from './cakeReducer'
import iceCreamReducer from './iceCreamReducer'
import dataReducer from './dataReducer'


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    pokemon:dataReducer
});

export default rootReducer;