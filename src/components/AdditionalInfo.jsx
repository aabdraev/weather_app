import React from 'react'

const AdditionalInfo = ({ data }) => {
    return (
        <div className='w_additional_info_container'>
            <div className="additional_info_box">
                <p className='measurement'>humidity:</p>
                <p className='value'>{data.main.humidity.toFixed()} %</p>
            </div>
            <div className="additional_info_box">
                <p className='measurement'>wind:</p>
                <p className='value'>{data.wind.speed.toFixed()} km/h</p>
            </div>
            <div className="additional_info_box">
                <p className='measurement'>feels like:</p>
                <p className='value'>{data.main.feels_like.toFixed()} &#8451;</p>
            </div>
        </div>
    )
}

export default AdditionalInfo