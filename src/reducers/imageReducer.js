import { FETCH_IMAGE_ERROR, FETCH_IMAGE_REQUEST, FETCH_IMAGE_SUCCESS } from "../constants/constants"


let initialState = {
    imageLoading:"",
    imageData: "",
    imageError:""
}

const imageReducer = (state=initialState ,action) => {
    switch (action.type) {
        case FETCH_IMAGE_REQUEST:
            return {
            ...state,
            imageLoading:true
        }
        case FETCH_IMAGE_SUCCESS:
            return {
            ...state,
            imageLoading: false,
            imageData:action.payload
        }
        case FETCH_IMAGE_ERROR:
            return {
            ...state,
            imageLoading: false,
            imageError:action.payload
        }
        default:
            return state
    }
}

export default imageReducer