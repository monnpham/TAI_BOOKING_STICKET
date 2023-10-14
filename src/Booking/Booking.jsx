import React, { useState } from 'react';
import bgmovie from './bgmovie.jpg';
import './style.css';
import List from './List';
import Form from './Form';
import { connect, useSelector } from 'react-redux';
import { ADD_LIST, BOOK_STICK, CHON, XOA } from './redux/constant/constant';
import { data } from './data';
function Booking(props) {
    const [array, setArray] = useState(data);
    let dataBook = useSelector((state) => state.dataBook);
    const [bookstick, setBookstick] = useState(dataBook);

    return (
        <div
            className='bg_container'
        >
            <div className="row pt-4">
                <div className="col-8">
                    <List
                        array={array}
                        setArray={setArray}
                        bookstick={bookstick}
                        setBookstick={setBookstick}
                        handleChonGhe={props.handleChonGhe}
                        handleXoaChon={props.handleXoaChon}
                    />

                </div>
                <div className="col-4">
                    <Form />
                </div>
            </div>
        </div>
    );
}

let mapDispatchToProps = (dispatch) => {
    return {
        handleChonGhe: (item, index, bookstick) => {
            let action = {
                type: CHON,
                payload: {
                    bookstick: bookstick,
                    item: item,
                    index: index
                }
            }
            dispatch(action)
        },
        handleXoaChon: (index, bookstick) => {
            let action = {
                type: XOA,
                payload: {
                    index: index,
                    bookstick: bookstick,

                }
            }
            dispatch(action)
        },

    }
}

export default connect(null, mapDispatchToProps)(Booking)