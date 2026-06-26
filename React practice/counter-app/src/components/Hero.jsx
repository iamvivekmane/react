import React from 'react'

const Hero = (props) => {
    const increament = () => {
        props.setCount(props.count + 1);
    }
    const decreament = () => {
        if (props.count === 0) {
            props.setCount(0)
        }
        else {
            props.setCount(props.count - 1);
        }
    }
    return (
        <div className='d-flex gap-4 align-items-center justify-content-center pt-4'>
            <button className='btn btn-primary ' onClick={increament}>
                Increament
            </button>
            <button className='btn btn-danger ' onClick={decreament} disabled={props.count === 0}>
                Decreament
            </button>
        </div>
    )
}

export default Hero