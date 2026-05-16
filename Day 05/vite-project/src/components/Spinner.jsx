import React, { Component } from 'react'
import loading from './loading.gif'
const Spinner = () => {
    return (
        <div className='text-center' style={{ height: '650px', width: 'auto', backgroundColor: '#0f1117' }}>
            <img className='my-3' style={{ height: '50px' }} src={loading} alt={loading} />
        </div>
    )
}
export default Spinner;