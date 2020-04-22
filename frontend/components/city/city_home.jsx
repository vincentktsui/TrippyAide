import React from 'react';

class CityHome extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        console.log(this.props);
        this.city = this.props.params.city;
    }

    render() {
        return(
            <div></div>
        )
    }
}

export default CityHome;