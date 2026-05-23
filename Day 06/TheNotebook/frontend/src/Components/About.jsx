import React, { useContext, useEffect, useEffectEvent } from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {
    const a = useContext(noteContext);
    useEffect(() => {
        a.update();
    }, [])

    return (
        <div>
            This is about {a.state.name} and I am in {a.state.class}
        </div>
    )
}

export default About