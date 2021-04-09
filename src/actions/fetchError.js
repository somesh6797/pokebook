import { FETCH_ERROR } from "../constants/constants"

const fetchError = (payload) => {
    return {
        type: FETCH_ERROR,
        payload:payload
    }
}

export default fetchError