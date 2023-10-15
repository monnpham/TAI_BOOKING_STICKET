import React, { useState } from 'react';
import bgmovie from './bgmovie.jpg';
import './style.css';
import List from './List';
import DetailBooking from './DetailBooking';
import { connect, useSelector } from 'react-redux';
import { ADD_LIST, DELETE, CHON, XOA } from './redux/constant/constant';
import { data } from './data';
function Booking(props) {
    const [array, setArray] = useState(data);
    let dataBook = useSelector((state) => state.dataBook);
    const [bookstick, setBookstick] = useState(dataBook);
    let stick = useSelector((state) => state.arrchon);

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
                    <DetailBooking
                        handleDeleteStick={props.handleDeleteStick}
                        bookstick={bookstick}
                        setBookstick={setBookstick}
                        stick={stick}
                    />
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
        handleDeleteStick: (index, arrchon) => {
            let action = {
                type: DELETE,
                payload: {
                    index: index,
                    arrchon: arrchon,
                }
            }
            dispatch(action)
        },

    }
}

export default connect(null, mapDispatchToProps)(Booking)