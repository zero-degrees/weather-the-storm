import {useState} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Navigation from 'components/Navigation/Navigation';
import Main from 'components/Main';
import CurrentWeather from 'components/WeatherPanels/CurrentWeather';
import FiveDayWeather from 'components/WeatherPanels/FiveDayWeather';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'App.css';

function App() {
    const [zip, setZip] = useState(null);

    function SearchCallback(zip) {
        setZip(zip);
    }

    return (
        <div className="App">
                <BrowserRouter>
                        <Navigation searchCallback={SearchCallback} />
                        
                        <div className="container">
                            <Route path="/" exact component={Main} />
                            <Route path="/current" exact>
                                    <CurrentWeather zip={zip} />
                            </Route>
                            <Route path="/fiveday" exact>
                                <FiveDayWeather zip={zip} />
                            </Route>
                        </div>
                </BrowserRouter>
        </div>
    );
}

export default App;
