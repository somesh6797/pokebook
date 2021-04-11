import { combineReducers } from 'redux'
import cakeReducer from './cakeReducer'
import iceCreamReducer from './iceCreamReducer'
import dataReducer from './dataReducer'
import imageReducer from './imageReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    pokemons: dataReducer,
    pokeImage:imageReducer
});

export default rootReducer;