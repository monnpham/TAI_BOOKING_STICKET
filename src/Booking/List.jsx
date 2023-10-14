import React from 'react'
import { connect } from 'react-redux';
import { setUserAction } from './redux/action/user';


function List({
    array,
    setArray,
    bookstick,
    setBookstick,
    handleThemGhe
}) {

    let renderGhe = (array) => {
        return array.map((item) => (
            <tr key={item.hang}>
                <td>{item.hang}</td>
                {item.hang !== '' &&
                    item.danhSachGhe.map((ghe) => (
                        ghe.daDat === true ?
                            <td key={ghe.soGhe}>
                                <button
                                    className="seat-button gheDaChon">{ghe.soGhe}</button>
                            </td>
                            :
                            <td key={ghe.soGhe}>
                                <button onClick={() => { handleThemGhe(ghe.soGhe, bookstick) }} className="seat-button gheTrong">{ghe.soGhe}</button>
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
                    {renderGhe(array)}

                </tbody>
            </table>
        </div>
    )
}

let mapDispatchToProps = (dispatch) => {
    return {
        handleSetUser: () => {
            dispatch(setUserAction())
        },

    }
}
export default connect(null, mapDispatchToProps)(List)