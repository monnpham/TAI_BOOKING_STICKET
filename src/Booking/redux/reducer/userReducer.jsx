import { BOOK_SKICT } from "../constant/constant"
import { data } from '../../data'
const initialState = {
    data: data,
    dataBook: data
}

export let userReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        default:
            return state
    }
}
