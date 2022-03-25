import * as actionType from './action-type'

export const setCommonIsLoading = ({ isLoading }) => ({
    type: actionType.SET_IS_LOADING,
    payload: {
        isLoading
    }
})

export const setCommonIsSnackbarOpen = ({ isSnackbarOpen, snackbarType, snackbarMessage }) => ({
    type: actionType.SET_IS_SNACKBAR_OPEN,
    payload: {
        isSnackbarOpen,
        snackbarType,
        snackbarMessage
    }
})