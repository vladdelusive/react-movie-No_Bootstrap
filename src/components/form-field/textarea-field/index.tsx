import React from 'react'
import './style.css'

export const TextAreaField = React.memo((props: any) => {
    return (
        <>
            <label
                className="review-form__label"
                htmlFor={props.input.name}>
                {props.label}
            </label>
            {
                props.meta.touched &&
                !props.meta.active &&
                <div className="validation">
                    {props.meta.warning || props.meta.error}
                </div>
            }
                <textarea
                    className={props.className}
                    id={props.input.name}
                    {...props.input}
                />

        </>
    )
})