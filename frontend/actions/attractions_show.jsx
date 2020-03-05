import React from 'react';
// import AttractionsIndexItem from './attractions_index_item';

class AttractionsShow extends React.Component {
    componentDidMount() {
        this.props.fetchAttraction();
    }
    render() {
    
        return (
            <div>
                
            </div>
        )
    }
}

export default AttractionsShow;