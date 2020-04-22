import React from 'react';

class CityHome extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        console.log(this.props);
        this.city = this.props.match.params.city;
    }

    componentDidMount() {
        this.props.updateFilter("city", this.city);
        this.props.fetchAttractions(this.props.filters);
    }

    render() {
        return(
            <div>
                <h1>{this.city}</h1>
            </div>
        )
    }
}

export default CityHome;