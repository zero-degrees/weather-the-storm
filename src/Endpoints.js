import Config from 'config';

const WeatherBaseURL = 'https://api.openweathermap.org/data/2.5';

const Current = `${WeatherBaseURL}/weather?appid=${Config.APIKey}`;
const FiveDay = `${WeatherBaseURL}/forecast?appid=${Config.APIKey}`;

const WeatherEndpoints = {Current, FiveDay};

export default WeatherEndpoints;
export {Current, FiveDay};