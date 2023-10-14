import { ADD_SEAT, REMOVE_SEAT, SET_DATA } from "../constant/Seats";

const initialState = {
    seatListArr: [],
    ArrBuy: [],
    activeIndex: null,
    activeItem: null,
    cart: [],
};

export let BookTicketReducerr = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_DATA: {
            state.seatListArr = payload;
            state.ArrBuy = payload;
            return { ...state };
        }
        case ADD_SEAT: {
            let cloneCart = [...state.cart];
            let newSeat = { ...payload.item };
            let newActiveItem = payload.item.soGhe;
            cloneCart.push(newSeat);
            return {
                ...state,
                cart: cloneCart,
                activeIndex: payload.index,
                activeItem: newActiveItem,
            };
        }
        case REMOVE_SEAT: {
            let cloneCart = [...state.cart];
            let index = cloneCart.findIndex((item) => item.soGhe === payload);
            cloneCart.splice(index, 1);
            return { ...state, cart: cloneCart };
        }
        default:
            return state;
    }
};