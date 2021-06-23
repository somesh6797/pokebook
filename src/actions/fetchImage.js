import fetchImageRequest from "./fetchImageRequest";
import fetchImageSuccess from "./fetchImageSuccess";
import fetchImageError from "./fetchImageError";
import axios from "axios";

//Thunk Function

const fetchImage = (pokenum) => {
    return (dispatch) => {
        dispatch(fetchImageRequest());
        axios
            .get(
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
                    pokenum +
                    ".svg"
            )
            .then((responce) => {
                // console.log(responce.data);
                dispatch(fetchImageSuccess(responce.data));
            })
            .catch((error) => {
                dispatch(fetchImageError(error.message));
            });
    };
};

export default fetchImage;
