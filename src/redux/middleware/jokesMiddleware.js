import Axios from "axios";
import { setJoke,setError,setLoadingState } from "../jokes/jokesAction";

const fetchJokes = () => {
    return function(dispatch) {
        dispatch(setLoadingState(true));
        Axios.get('https://joke3.p.rapidapi.com/v1/joke',{headers : {"x-rapidapi-host": "joke3.p.rapidapi.com",
        "x-rapidapi-key": "054137e731msh942fe9cd84a45a9p134171jsnea4afac19b51"}})
        .then (
            (response) => {
                console.log('response', response.data)
                dispatch(setJoke(response.data));
            }
        )
        .catch (
            (error) => {
                dispatch(setError(error));
            }
        )
    }
}

export {fetchJokes};