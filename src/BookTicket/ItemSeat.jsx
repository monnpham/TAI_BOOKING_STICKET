import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_SEAT } from "./redux/constant/Seats";

export default function ItemSeat({ item }) {
    let activeIndex = useSelector((state) => state.activeIndex);
    let activeItem = useSelector((state) => state.activeItem);
    let dispatch = useDispatch();
    let handleAddSeat = (item, index) => {
        let action = {
            type: ADD_SEAT,
            payload: {
                item: item,
                index: index,
            },
        };
        dispatch(action);

    };


    let { hang, danhSachGhe } = item;

    let renderSeat = () => {
        return danhSachGhe.map((item, index) => {
            return (
                <div
                    className={
                        index === activeIndex && item.soGhe === activeItem
                            ? "active my-2 number__seat"
                            : "my-2 number__seat"
                    }
                    onClick={() => {
                        handleAddSeat(item, index);
                    }}
                >
                    {item.soGhe}
                </div>
            );
        });
    };

    return (
        <div className="d-flex justify-content-between text-light">
            <div className="text-warning font-weight-bold mt-3 mr-3 row__seat">
                {hang}
            </div>
            {renderSeat()}
        </div>
    );
}