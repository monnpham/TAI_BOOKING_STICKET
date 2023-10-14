import React, { useState } from 'react'
import { connect, useSelector } from 'react-redux';
import { BOOK_STICK } from './redux/constant/constant';




export default function List({
    array,
    setArray,
    bookstick,
    setBookstick,
    handleChonGhe,
    handleXoaChon,
}) {


    let handleThemGhe = (idGhe, bookstick) => {
        for (var i = 1; i < bookstick.length; i++) {
            for (var j = 0; j < bookstick[i].danhSachGhe.length; j++) {
                if (bookstick[i].danhSachGhe[j].soGhe === idGhe) {
                    if (bookstick[i].danhSachGhe[j].daDat === false) {
                        bookstick[i].danhSachGhe[j].daDat = true
                        handleChonGhe(bookstick[i].danhSachGhe[j], idGhe, bookstick[i].danhSachGhe[j])
                        break
                    }
                    break
                }
            }
        }
        setBookstick(bookstick)
        renderGhe(bookstick)
    }

    let handleXoa = (idGhe, bookstick) => {
        for (var i = 1; i < bookstick.length; i++) {
            for (var j = 0; j < bookstick[i].danhSachGhe.length; j++) {
                if (bookstick[i].danhSachGhe[j].soGhe === idGhe) {
                    if (bookstick[i].danhSachGhe[j].daDat === true) {
                        bookstick[i].danhSachGhe[j].daDat = false
                        handleXoaChon(idGhe)
                        break
                    }
                    break
                }
            }
        }
        setBookstick(bookstick)
        renderGhe(bookstick)
    }

    let renderGhe = (array) => {
        return array.map((item) => (
            <tr key={item.hang}>
                <td>{item.hang}</td>
                {item.hang !== '' &&
                    item.danhSachGhe.map((ghe) => (
                        ghe.daDat === true ?
                            <td key={ghe.soGhe}>
                                <button
                                    onClick={() => { handleXoa(ghe.soGhe, bookstick) }}
                                    className="seat-button gheDaChon">{ghe.soGhe}
                                </button>
                            </td>
                            :
                            <td key={ghe.soGhe}>
                                <button
                                    onClick={() => { handleThemGhe(ghe.soGhe, bookstick) }}
                                    className="seat-button gheTrong">
                                    {ghe.soGhe}
                                </button>
                            </td>
                    ))}
            </tr>
        ))
    }
    return (
        <div className='container'>
            <h1>ĐẶT VÉ XEM PHIM</h1>
            <table className="table">
                <thead>
                    {array.map((item) => (
                        <tr key={item.hang}>
                            <tr></tr>
                            {item.hang === '' &&
                                item.danhSachGhe.map((ghe) => (
                                    <td key={ghe.soGhe} className={ghe.soGhe}>
                                        {ghe.soGhe}
                                    </td>
                                ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {renderGhe(bookstick)}
                </tbody>
            </table>
        </div>
    )
}
