import * as actionType from './action-type'
import { initialState } from './initial-state'

export default (state = initialState, { type, payload }) => {

    switch (type) {

        case actionType.SET_IS_LOADING:
            return {
                ...state,
                isLoading: payload.isLoading
            }

        case actionType.SET_IS_SNACKBAR_OPEN:
            return {
                ...state,
                isSnackbarOpen: payload.isSnackbarOpen,
                snackbarType: payload.snackbarType,
                snackbarMessage: payload.snackbarMessage
            }

        default: return state;
    }
}