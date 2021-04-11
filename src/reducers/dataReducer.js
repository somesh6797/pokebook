import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "../constants/constants"

const initialState = {
    dataLoading: true,
    pokedata: {},
    dataError:""
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                dataLoading:true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                dataLoading: false,
                pokedata:action.payload
            }
        case FETCH_ERROR:
            return{
            ...state,
            dataLoading: false,
            dataError:action.payload
            }
        default: return state
    }
}

export default dataReducer