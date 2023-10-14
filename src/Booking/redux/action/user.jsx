// import axios from "axios"
import { BOOK_SKICT } from "../constant/constant"

export let setUserAction = () => {
    return (dispatch) => {
        let action = {
            type: BOOK_SKICT,
            payload: dispatch
        }
        dispatch(action)
    }
}
