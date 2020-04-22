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

        console.log(this.props)
        this.autocomplete = new google.maps.places.Autocomplete(input, options);
        this.autocomplete.setFields(['address_components']);
        this.autocomplete.addListener('place_changed', () => {
            const addressObject = this.autocomplete.getPlace();
            const place = addressObject.address_components;
            if (place) {
                const city = place[0].long_name;
                this.props.history.push(`/${city}`)
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