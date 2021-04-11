
import axios from 'axios'
import fetchRequest from './fetchRequest'
import fetchSuccess from './fetchSuccess'
import fetchError from './fetchError'



//This function uses middleware
//in dispatch call we can have a action creator name 
//or we can call it if it has any arguments
// so argument will be sent to action creators and then 
//that action will be checked in reducer for this time 
//it will be ckecked in the dataReducer.
//as soon as action is dispatched reducer is invoked.
// always call the action creator dont just give the name of it

const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchRequest());
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10')
            .then(responce => {
                dispatch(fetchSuccess(responce.data))
                // console.log(responce.data.results)
            })
            .catch(error => {
                dispatch(fetchError(error.message))
            })
    }
}
export default fetchData;



// const fetchData = () => {
//     return (dispatch) => {
//         dispatch(fetchRequest());
//         axios.get('https://pokeapi.co/api/v2/pokemon/1/')
//             .then(responce => {
//                 dispatch(fetchSuccess(responce.data))
//             })
//             .catch(error => {
//                 dispatch(fetchError(error.message))
//             })
//     }
// }
// export default fetchData;