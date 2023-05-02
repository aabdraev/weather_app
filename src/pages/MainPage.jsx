import React, { useEffect, useState } from 'react'
import { WEATHER_API } from '../helpers/weatherRequest'
import MainInfo from '../components/MainInfo'
import AdditionalInfo from '../components/AdditionalInfo'
import MyInput from '../components/myInput/MyInput'

const MainPage = () => {

    const [city, setCity] = useState("Bishkek")
    const [value, setValue] = useState("")
    const [data, setData] = useState([])

    const [err, setErr] = useState(false)
    const [loading, setLoading] = useState(true)

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            setCity(e.target.value)
            setValue("")
        }
    }

    useEffect(() => {
        fetch(WEATHER_API(city))
            .then((response) => {
                if (response.status === 200) {
                    err && setErr(false)
                    return response.json()
                } else {
                    throw new Error("something went wrong...")
                }
            })
            .then((data) => {
                setData(data)
                console.log(data);
            })
            .catch(() => setErr(true))
            .finally(() => setLoading(false))
    }, [city, err])

    return (
        <div className='main_inner'>
            {
                !loading
                    ? (
                        <div className="w_container">
                            <MyInput
                                type='text'
                                placeholder={!err ? 'enter location...' : 'enter valid location...'}
                                value={value}
                                onChange={handleChange}
                                onKeyDown={handleSearch}
                            />
                            <MainInfo data={data} />
                            <AdditionalInfo data={data} />
                        </div>
                    )
                    : (
                        <h2>loading...</h2>
                    )
            }
        </div>
    )
}

export default MainPage