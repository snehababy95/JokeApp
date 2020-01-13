import {SET_JOKE, SET_ERROR, SET_LOADING_STATE} from './jokesActionType';

const initialState = {
    joke : '',
    error : '',
    isLoading : false
}
const jokeReducer = (state = initialState,action) => {

        switch (action.type) {
            case SET_JOKE: {
                return {
                    ...state,
                    joke : action.payload
                }
            }

            case SET_ERROR: {
                return{
                    ...state,
                    error : action.payload
                }
            }

            case SET_LOADING_STATE: {
                return{
                    ...state,
                    isLoading : action.payload
                }
            }
            default: return state
        }


}

export {jokeReducer};