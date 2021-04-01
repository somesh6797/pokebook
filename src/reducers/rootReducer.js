import { combineReducers } from 'redux'

import cakeReducer from './cakeReducer'
import iceCreamReducer from './iceCreamReducer'
import dataReducer from './dataReducer'


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    // data:dataReducer
});

export default rootReducer