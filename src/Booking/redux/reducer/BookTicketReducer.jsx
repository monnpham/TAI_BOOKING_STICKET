import { data } from "../../data"
import { XOA, CHON } from "../constant/constant"
const initialState = {
    data: data,
    dataBook: data,
    item: "",
    index: "",
    arrchon: []
}

export let BookTicketReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CHON: {
            state.item = payload.item
            state.index = payload.index
            state.dataBook = payload.bookstick
            state.arrchon.push(state.item)
            return { ...state }
        }
        case XOA: {
            state.index = payload.index


            return { ...state }
        }
        default:
            return state
    }
}
