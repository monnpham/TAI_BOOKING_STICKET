import React from 'react'
import { useSelector } from 'react-redux';

export default function DetailBooking(
    handleDeleteStick,
    bookstick,
    setBookstick,
    stick
) {

    let handleDelete = (idGhe, stick, bookstick) => {
        for (var i = 1; i < bookstick.length; i++) {
            for (var j = 0; j < bookstick[i].danhSachGhe.length; j++) {
                if (bookstick[i].danhSachGhe[j].soGhe === idGhe) {
                    if (bookstick[i].danhSachGhe[j].daDat === true) {
                        bookstick[i].danhSachGhe[j].daDat = false
                        handleDeleteStick(idGhe, bookstick)
                        break
                    }
                    break
                }
            }
        }
        setBookstick(bookstick)
    }
    return (
        <div className='container'>
            <h1>Danh Sách Ghế Bạn Chọn</h1>
            <div className="seat text-dark">
                <tr><td className="seat-button gheDaDat"></td><td>Ghế Đã Đặt</td></tr>
                <tr><td className="seat-button gheDaChon "></td><td>Ghế Đang Chọn</td></tr>
                <tr><td className="seat-button"></td><td>Ghế Trống</td></tr>
            </div>
            <table className='table_form'>
                <thead>
                    <tr>
                        <td>Số Ghế</td>
                        <td>Giá</td>
                        <td>Hủy</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        stick.map((item) => (
                            <tr key={item}>
                                <td>{item.soGhe}</td>
                                <td>{item.gia}</td>
                                <td><button onClick={() => { handleDelete(item.soGhe, item) }} className='btn btn-danger'>X</button></td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td>Tổng Tiền</td>
                    </tr>
                </tbody>
            </table>

        </div >
    )
}
