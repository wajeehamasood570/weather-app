import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import react, {useEffect, useState} from 'react'

const App = () =>  {

const [tempInfo,setTempInfo] = useState({});
const [searchValue,setSearchValue] = useState("karachi");


const getWeatherInfo = async ( ) =>{
  try{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=1175c28def8bce1c6fa6dfb512e232a0`;

    const response = await fetch(url);
  const data = await response.json();

  const { temp , humidity, pressure } = data.main;

  const {main : weathermood } = data.weather[0];
  const {icon : weathericon } = data.weather[0];
  const { name } = data;
  const {speed} = data.wind;
  const {country} = data.sys;

  const mynewWeather = {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country
  };


  setTempInfo(mynewWeather);

  console.log(temp);
  }
  catch(error){
    console.error();
  }
};


useEffect(() => {
  getWeatherInfo();
  
}, [searchValue]);








  return (


    // {!city ? (
    //   <p> No Data </p>
    // )   : (
    //   <div>
    
        
    //     </div>
    
    // )
    
    // }


    
    <div className="App">
      <header className="App-header">
    



        <div className="main">
          <Container >
            <div className="maindiv">
              <Row style={{height:'auto'}}>
                <Col xl={8} lg={8} md={8} sm={6} xs={8} className="pic">

                  <img src="https://www.freepnglogos.com/uploads/hot-air-balloon-png/hot-air-balloon-ghantee-9.png" />
                  <Row className="picdetail">
                    <Col sm={6} md={6} xs={4}>
                      <h1>
                      {tempInfo.temp}°</h1>
                        </Col>
                    <Col sm={3} md={3} xs={4}>
                    <h4>
                     {searchValue}
                      </h4>
                    </Col>
                    <Col sm={3} md={3}  xs={4}>
                      <h5>
                      {tempInfo.weathermood}
                      </h5>
                    {/* <i className="fas fa-sun"></i> */}
                    </Col>
                  </Row>

                </Col>




                <Col sm={4} md={4} xs={3} className="detail">
                  <h5>
                  <TextField id="standard-basic" label="Enter City Name" variant="standard" value={searchValue} onChange={ (e) => setSearchValue(e.target.value) } />
                  <Button variant="contained" type="button" onClick={getWeatherInfo} className='icon'><i className="fas fa-search"></i></Button>
                 
                
                  </h5>

                  <h6 >
                    Weather Details
                    </h6>

               
                  <ul>
                  <li> Temp: {tempInfo.temp}° </li>
                  {/* <li> feels_like : {city.feels_like}°</li> */}
                  {/* <li>temp_min :  {city.temp_min}° </li> */}
                  {/* <li> temp_max : {city.temp_max}°</li> */}
                  <li> pressure : {tempInfo.pressure}</li>
                  <li>humidity : {tempInfo.humidity}</li>
                  
                  </ul>
                 
                </Col>
              </Row>
            </div>
          </Container>
        </div>

      </header>
    </div>
  );
}

export default App;
