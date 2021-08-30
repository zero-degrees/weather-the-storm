import {useState, useEffect} from 'react';
import Axios from 'axios';

import {FiveDay} from 'Endpoints';
import HourlyData from 'components/WeatherPanels/HourlyData';

const FiveDayWeather = props => {
    let {zip} = props;
    const [data, setData] = useState(null);

    const fetch = async (zipCode) => {
        if(!zipCode || zipCode.length !== 5) {
            return;
        }

        try {
            const response = await Axios.get(`${FiveDay}&units=imperial&zip=${zipCode}`);
            
            setData(response.data);
        }
        catch(err) {
            console.error(err.message);
        }
    }

    const buildForecast = hourlyData => {
        return hourlyData.map(dayData => (
            <HourlyData key={dayData.dt} data={dayData} />
        ));
    };

    useEffect(() => {
        fetch(zip);
    }, [zip]);

    if(!data) {
        return null;
    }

    return (
        <div>
            <div className="row p-6">
                <div className="col-sm-12">
                    <h1 className="display-3">5 Day Forecast</h1>
                    <h1 className="display-5">{data.city.name}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    {buildForecast(data.list)}
                </div>
            </div>
        </div>
    );
};

export default FiveDayWeather;