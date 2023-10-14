import React from 'react'

export default function Form() {
    return (
        <div className='container'>
            <h1>Danh Sách Ghế Bạn Chọn</h1>
            <div className="seat">
                <tr><td className="seat-button"></td><td>Ghế Đã Đặt</td></tr>
                <tr><td className="seat-button"></td><td>Ghế Đang Chọn</td></tr>
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
                    <tr>
                        <td>Tổng Tiền</td>
                    </tr>
                </tbody>
            </table>

        </div >
    )
}
