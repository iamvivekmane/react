import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';


const Shop = () => {
    const dispatch = useDispatch();
    return (
        <>

            <div className="container">
                <h2 className='mx-2'>Deposit/Withdraw money</h2>
                <button className='btn btn-primary mx-2' onClick={() => { dispatch(actionCreators.withdrawMoney(100)) }}>-</button>
                Update balance
                <button className='btn btn-primary mx-2' onClick={() => { dispatch(actionCreators.depositMoney(100)) }}>+</button>
            </div>

        </>

    )
}

export default Shop