import React from 'react'

const Task = () => {
    return (
        <div class="form-check d-flex justify-content-between gap-5 border px-4 py-2 m-3">
            <div>
                <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
            </div>
            <div>
                <label class="form-check-label" for="radioDefault1">
                    Default radio
                </label>
            </div>
            <div>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default Task