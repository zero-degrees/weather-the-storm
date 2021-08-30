import {MakeTime, MakeDate, DegreesToDirections} from 'Utils';

const HourlyData = props => {
    const {data} = props;

    const getWindDirection = wind => {
        return wind.speed !== 0 ? DegreesToDirections(wind.deg) : ''
    };

    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="card mb-4">
                    <h5 className="card-header">{MakeDate(data.dt)} @ {MakeTime(data.dt)}</h5>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="display-4 float-start">{data.main.temp.toFixed()}°</div>
                                <div className="display-6 float-start"><small>{data.weather[0].main}</small></div>
                                <div className="clearfix" />
                            </div>
                            <div className="col-sm-8">
                                <div>Feels like: <strong>{data.main.feels_like.toFixed()}°</strong></div>
                                <div>Wind: <strong>{data.wind.speed.toFixed()} mph {getWindDirection(data.wind)}</strong></div>
                                <div>Humidity: <strong>{data.main.humidity}%</strong></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HourlyData;