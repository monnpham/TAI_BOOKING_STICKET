import { ADD_SEAT, REMOVE_SEAT } from "../constant/Seat";

export let addSeatAction = (seat, index) => {
    return {
        type: ADD_SEAT,
        payload: {
            seat: seat,
            index: index,
        },
    };
};

export let removeSeatAction = (seat) => {
    return {
        type: REMOVE_SEAT,
        payload: seat,
    };
};