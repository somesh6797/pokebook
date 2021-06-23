import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import imageReducer from "./imageReducer";

const rootReducer = combineReducers({
    pokemons: dataReducer,
    pokeImage: imageReducer,
});

export default rootReducer;
