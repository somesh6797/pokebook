import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "../constants/constants"

const initialState = {
    loading: false,
    data: [],
    error:""
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_SUCCESS:
        case FETCH_ERROR:
    }
}

export default dataReducer