import React, { useEffect } from "react";
import SeatRow from "./SeatRow";
import BookInfo from "./BookInfo";
import { useDispatch } from "react-redux";
import axios from "axios";
import { SET_DATA } from "./redux/constant/Seats";

export default function BookTicket() {
    let dispatch = useDispatch();
    useEffect(() => {
        axios({
            url: "https://64c8b67ca1fe0128fbd61a36.mockapi.io/project",
            method: "GET",
        })
            .then((res) => {
                let action = {
                    type: SET_DATA,
                    payload: res.data,
                };
                dispatch(action);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="bgBookingMovie">
            <div className="content container-fluid">
                <div className="row">
                    <div className="col-7 content__left">
                        <h1 className="text-warning mt-4">ĐẶT VÉ XEM PHIM</h1>
                        <div className="manhinh m-auto"></div>
                        <h6 className="text-light mb-2 font-weight-bold">Màn hình</h6>
                        <SeatRow />
                    </div>
                    <div className="col-5 content__right">
                        <h3 className="text-light mt-4">DANH SÁCH GHẾ BẠN CHỌN</h3>
                        <BookInfo />
                    </div>
                </div>
            </div>
        </div>
    );
}