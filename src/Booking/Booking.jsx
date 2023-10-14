import React, { useState } from 'react';
import bgmovie from './bgmovie.jpg';
import './style.css';
import List from './List';
import Form from './Form';
import { connect } from 'react-redux';
import { setUserAction } from './redux/action/user';

function Booking(props) {
    const [array, setArray] = useState(props.array);
    const [bookstick, setBookstick] = useState(props.dataBook);

    let handleThemGhe = (idGhe, bookstick) => {
        const ghe = bookstick.danhSachGhe.find((ghe) => ghe.soGhe === idGhe);
        console.log("🚀 ~ file: Booking.jsx:16 ~ handleThemGhe ~ ghe:", ghe)
        if (ghe) {
            ghe.daDat = true;
            return setArray(bookstick);
        }
    }

    return (
        <div
            style={{
                backgroundImage: `url(${bgmovie})`,
            }}
            className='bg_container'
        >
            <div className="row pt-4">
                <div className="col-8">
                    <List
                        array={array}
                        setArray={setArray}
                        bookstick={bookstick}
                        setBookstick={setBookstick}
                        handleThemGhe={handleThemGhe}
                    />

                </div>
                <div className="col-4">
                    <Form />
                </div>
            </div>
        </div>
    );
}
let mapStateToProps = (state) => {
    return {
        array: state.userReducer.data,
        dataBook: state.userReducer.dataBook
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        handleSetUser: () => {
            dispatch(setUserAction())
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Booking)