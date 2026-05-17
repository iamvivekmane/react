import React, { Component } from 'react'
import loading from './loading.gif'
const Spinner = (props) => {
    console.log('spinner ' + props.Mode)
    return (
        <div className='text-center' style={{ height: '650px', width: 'auto', backgroundColor: props.Mode === 'dark' ? '#0a0f1e' : '#ffffff' }}>
            <img className='my-3' style={{ height: '50px' }} src={loading} alt={loading} />
        </div >
    )
}
export default Spinner;