import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_SEAT } from "./redux/constant/Seats";

export default function BookInfo() {
    let cart = useSelector((state) => state.cart);
    let dispatch = useDispatch();
    let handleRemoveSeat = (item) => {
        let action = {
            type: REMOVE_SEAT,
            payload: item,
        };
        dispatch(action);
    };
    let renderTbody = () => {
        return cart.map((item) => {
            return (
                <tr>
                    <th scope="row">{item.soGhe}</th>
                    <td>{item.gia}</td>
                    <td>
                        <button
                            className="btn btn-danger"
                            onClick={() => {
                                handleRemoveSeat(item.soGhe);
                            }}
                        >
                            X
                        </button>
                    </td>
                </tr>
            );
        });
    };

    let renderTotalPrice = () => {
        let totalPrice = 0;
        cart.map((item) => {
            totalPrice += item.gia;
            return (document.querySelector(".total__price").innerHTML =
                totalPrice.toLocaleString() + "VNĐ");
        });
    };

    return (
        <div>
            <div className="seat_note">
                <div className="note_item d-flex align-items-center">
                    <div
                        className="mr-4 seat_color"
                        style={{ backgroundColor: "#bf1313" }}
                    ></div>
                    <span
                        className="font-weight-bold text-light"
                        style={{ fontSize: "24px" }}
                    >
                        Ghế đã đặt
                    </span>
                </div>
                <div className="note_item d-flex align-items-center mt-2">
                    <div
                        className="mr-4 seat_color"
                        style={{ backgroundColor: "#34bf13" }}
                    ></div>
                    <span
                        className="font-weight-bold text-light"
                        style={{ fontSize: "24px" }}
                    >
                        Ghế đang chọn
                    </span>
                </div>
                <div className="note_item d-flex align-items-center mt-2">
                    <div
                        className="mr-4 seat_color"
                        style={{ backgroundColor: "#ffffff" }}
                    ></div>
                    <span
                        className="font-weight-bold text-light"
                        style={{ fontSize: "24px" }}
                    >
                        Ghế còn trống
                    </span>
                </div>
            </div>
            <table className="table mt-4 font-weight-bold">
                <thead>
                    <tr>
                        <th scope="col" className="text-light">
                            Số ghế
                        </th>
                        <th scope="col" className="text-light">
                            Giá vé
                        </th>
                        <th scope="col" className="text-light">
                            Hủy vé
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {renderTbody()}
                    <tr>
                        <th scope="row" className="text-light">
                            Tổng tiền
                        </th>
                        <td className="total__price">{renderTotalPrice()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}