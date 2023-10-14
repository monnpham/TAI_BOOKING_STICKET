import React from "react";
import ItemSeat from "./ItemSeat";
import { useSelector } from "react-redux";

export default function SeatRow() {
    let seatListArr = useSelector((state) => state.seatListArr);
    let renderListSeat = () => {
        return seatListArr.map((item, index) => {
            return <ItemSeat item={item} key={index} />;
        });
    };
    return <div className="mt-4 w-75 mx-auto list__seat">{renderListSeat()}</div>;
}