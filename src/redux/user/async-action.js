import {
    signup,
    signin
} from '../../api/user'

import {
    setUser as setUserLocalStorage,
    removeUser,
    removeAccountType,
    removeToken,
    removeAdminToken,
    getToken,
    getWMToken,
    setUser,
    setToken
  } from '../../utils/auth'

import { setCommonIsLoading } from "../common/action"
import { setCommonIsSnackbarOpen } from '../common/action';


export const signupUser = (fullName, email, password) => {

    return async (dispatch, getState) => {

        dispatch(setCommonIsLoading({ isLoading: true }));

        try {
            const res = await signup({ fullName, email, password });

            removeUser();
            removeToken();

            dispatch(setCommonIsLoading({ isLoading: false }))
            window.location.href = "/verify-email";

        } catch (e) {
            dispatch(setCommonIsLoading({ isLoading: false }));

            let snackbarMessage;
            if (e.response.status === 400) snackbarMessage = 'This email id is already registered.'
            else snackbarMessage = 'Something went wrong'

            dispatch(setCommonIsSnackbarOpen({
                isSnackbarOpen: true,
                snackbarType: 'error',
                snackbarMessage: snackbarMessage
            }));
        }
    }
}

export const signinUser = (email, password) => {

    return async (dispatch, getState) => {

        dispatch(setCommonIsLoading({ isLoading: true }));

        try {
            const res = await signin({ email, password });

            setUser(res.data);
            setToken(res.headers['x-auth-token'])

            dispatch(setCommonIsLoading({ isLoading: false }))
            window.location.href = "/";

        } catch (e) {
            dispatch(setCommonIsLoading({ isLoading: false }));

            let snackbarMessage;
            if (e.response.status === 400) snackbarMessage = 'Invalid/Incomplete data given'
            else snackbarMessage = 'Something went wrong'

            dispatch(setCommonIsSnackbarOpen({
                isSnackbarOpen: true,
                snackbarType: 'error',
                snackbarMessage: snackbarMessage
            }));
        }
    }
}