import { FETCH_SUCCESS } from "../constants/constants"

const fetchSuccess = (payload) => {
    return {
        type: FETCH_SUCCESS,
        payload:payload
    }
}

export default fetchSuccess