import { FETCH_IMAGE_SUCCESS } from './../constants/constants'

 const fetchImageSuccess = (payload) => {
     return {
         type: FETCH_IMAGE_SUCCESS,
         payload:payload
    }
 }

export default fetchImageSuccess;