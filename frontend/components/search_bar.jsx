import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {

        };
        
    }

    componentDidMount() {
        const options = { types: ['(cities)'] };
        const input = document.getElementById('nav-search');

        this.autocomplete = new google.maps.places.Autocomplete(input, options);
        this.autocomplete.setFields(['address_components', 'geometry']);
        this.autocomplete.addListener('place_changed', () => {
            const addressObject = this.autocomplete.getPlace();
            const place = addressObject.address_components;
            if (place) {
                const city = place[0].long_name;
                const location = addressObject.geometry.location;
                // this.props.updateFilter("city", city);
                if (!localStorage.city || localStorage.city !== city) {
                    localStorage.setItem('city', city);
                    localStorage.setItem('location', location);
                }
                this.props.history.push(`/${city}`);

            }
            else {
            }
        })
    }

    render() {
        return (
        <div className="search-bar">
            <form>
                <input id="nav-search" type="search"/>
            </form>
        </div>
        )
    }
}

export default SearchBar;