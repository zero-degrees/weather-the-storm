import {useState, useEffect} from 'react';
import Axios from 'axios';

import {Current} from 'Endpoints';
import {MakeTime, DegreesToDirections} from 'Utils';

const CurrentWeather = props => {
    let {zip} = props;
    const [data, setData] = useState(null);

    const fetch = async (zipCode) => {
        if(!zipCode || zipCode.length !== 5) {
            return;
        }

        try {
            const response = await Axios.get(`${Current}&units=imperial&zip=${zipCode}`);
            
            setData(response.data);
        }
        catch(err) {
            console.error(err.message);
        }
    }

    const getWindDirection = wind => {
        return wind.speed !== 0 ? DegreesToDirections(wind.deg) : ''
    };

    useEffect(() => {
        fetch(zip);
    }, [zip]);

    if(!data) {
        return null;
    }

    return (
        <div>
            <div className="row">
                <div className="col-sm-12">
                    <h1 className="display-3">Current Weather</h1>
                    <h1 className="display-5">{data.name}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="display-1 float-start">{data.main.temp.toFixed()}°</div>
                    <div className="display-4 float-start"><small>{data.weather[0].main}</small></div>
                    <div className="clearfix" />
                </div>
                
                <div className="col-sm-6">
                    <div>Feels like: <strong>{data.main.feels_like.toFixed()}°</strong></div>
                    <div>Low: <strong>{data.main.temp_min.toFixed()}°</strong></div>
                    <div>High: <strong>{data.main.temp_max.toFixed()}°</strong></div>
                    <div>Wind: <strong>{data.wind.speed.toFixed()} mph {getWindDirection(data.wind)}</strong></div>
                    <div>Humidity: <strong>{data.main.humidity}%</strong></div>
                    <div><label>Sunrise: </label> <strong>{MakeTime(data.sys.sunrise)}</strong></div>
                    <div><label>Sunset: </label> <strong>{MakeTime(data.sys.sunset)} UTC</strong></div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;