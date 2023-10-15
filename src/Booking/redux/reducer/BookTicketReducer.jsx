import { data } from "../../data"
import { XOA, CHON, DELETE } from "../constant/constant"
const initialState = {
    data: data,
    dataBook: data,
    item: "",
    index: "",
    arrchon: [],
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
            state.dataBook = payload.bookstick
            let cloneArrChon = state.arrchon
            if (cloneArrChon.length === 1)
                cloneArrChon = []
            else {
                for (var i = 0; i < cloneArrChon.length; i++) {
                    if (state.index === cloneArrChon[i].soGhe) {
                        cloneArrChon.splice(state.index, 1)
                        break
                    }
                }
            }
            state.arrchon = cloneArrChon
            return { ...state }

        }
        case DELETE: {
            state.index = payload.index
            state.arrchon = payload.arrchon
            return { ...state }
        }
        default:
            return state
    }
}
