import { SET_ERROR, SET_JOKE, SET_LOADING_STATE } from "./jokesActionType";

const setJoke = (joke) => {
    return {
        type : SET_JOKE,
        payload : joke
    }
}

const setLoadingState = (state) => {
    return{
        type : SET_LOADING_STATE,
        payload : state
    }
}

const setError = (error) => {
    return {
        type : SET_ERROR,
        payload :error
    }
}
export {setJoke,setError,setLoadingState} ;