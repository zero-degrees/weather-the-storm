import {useRef} from 'react';
import {useHistory} from 'react-router-dom';

const Search = props => {
    const zipRef = useRef(null);
    const history = useHistory();

    async function SearchHandler(e) {
        e.preventDefault();

        const zip = zipRef.current.value;

        if(zip && zip.length === 5) {
            props.callback(zip);
            history.push('/current');
        }
    }

    return (
        <form onSubmit={SearchHandler}>
            <div className="input-group">
                <input type="text" className="form-control" id="zip" placeholder="ZIP code" ref={zipRef} />
                <button className="btn btn-primary">Search</button>
            </div>
        </form>
    );
};

export default Search;