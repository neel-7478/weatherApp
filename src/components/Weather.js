import React, { useState, useEffect } from 'react'

const Weather = () => {
  const [data, setData] = useState({});
  const [city, setCity] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    setCity(event.target.value);
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=36a991a12299a86bf371accfc7267ea0`
  const handleSearch = async () => {
    // console.log("handleclick")
    const response = await fetch(url);
    const details = await response.json();
    setData(details);
    console.log(details);
    setCity('');
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Weather App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      <div className='container'>
        <div className='container my-2 d-flex justify-content-center'>
          <input className='mx-3 rounded-top' type="search" onChange={handleChange} value={city} placeholder="Enter City Name" />
          <button className='rounded-top' type="submit" onClick={handleSearch}>Search</button>
        </div>
        <div className='container'>
          <p className='text-center' style={{ fontWeight: 900, fontSize: '30px' }}>{data.name ? <span><strong>CITY : </strong>{data.name}</span> : ""}</p>
          <p className='text-center' style={{ fontWeight: 900, fontSize: '30px' }}>{data.main ? <span><strong>TEMP : </strong> {data.main.temp}°C</span> : null}</p>
          <p className='text-center' style={{ fontWeight: 900, fontSize: '30px' }}>{data.weather ? <span>{data.weather[0].main}</span> : null}</p>
        </div>
        <div className='container' style={{ marginTop: '100px' }}>
          <div className='row'>
            <div className='col-md-4'>
              <p style={{ fontWeight: 700, fontSize: '20px' }}>Min_Temp</p>
              {data.main ? <p>{data.main.temp_min}°C</p> : null}
            </div>
            <div className='col-md-4'>
              <p style={{ fontWeight: 700, fontSize: '20px' }}>Wind</p>
              {data.wind ? <p>{data.wind.speed} M/s</p> : null}
            </div>
            <div className='col-md-4'>
              <p style={{ fontWeight: 700, fontSize: '20px' }}>Humidity</p>
              {data.main ? <p>{data.main.humidity} %</p> : null}
            </div>
          </div>
          <div className='container' style={{ marginTop: '100px' }}>
            <div className='row'>
              <div className='col-md-4'>
                <p style={{ fontWeight: 700, fontSize: '20px' }}>Visibility</p>
                {data.main ? <p>{data.visibility} Meter</p> : null}
              </div>
              <div className='col-md-4'>
                <p style={{ fontWeight: 700, fontSize: '20px' }}>Pressure</p>
                {data.main ? <p>{data.main.pressure} hPa</p> : null}
              </div>
              <div className='col-md-4'>
                <p style={{ fontWeight: 700, fontSize: '20px' }}>Max_temp</p>
                {data.main ? <p>{data.main.temp_max}°C</p> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Weather
