import React from 'react'

const MainInfo = ({ data }) => {
    return (
        <div className='w_main_info'>
            <p className='city'>{data.name}</p>
            <div className='location'>
                <p>longtitude: {data.coord.lon}</p>
                <p>latitude: {data.coord.lat}</p>
            </div>
            <p className='value'>{data.main.temp.toFixed()} &#8451;</p>
        </div>
    )
}

export default MainInfo