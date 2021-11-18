import axios from "axios";
import { AppDispatch } from "../..";
import { IUser } from "../../../models/IUser";
import { AuthActionEnum, SetAuthAction, SetErrorAction, SetLoadingAction, SetUserAction } from "./types";

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsAuth: (isAuth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: isAuth}),
    setIsLoading: (isLoading: boolean): SetLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload: isLoading}),
    setError: (error: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload: error}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            const mockUser = await axios.get('./users.json');
            console.log(mockUser)
        } catch (e) {
            dispatch(AuthActionCreators.setError('Произошла ошибка при логине'));
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        try {
            
        } catch (e) {

        }
    },
}