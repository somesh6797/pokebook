import { FETCH_IMAGE_ERROR } from './../constants/constants'

const fetchImageError = (payload) => {
     return {
         type: FETCH_IMAGE_ERROR,
         payload:payload
    }
 }

export default fetchImageError;