import React from 'react';
import { Link } from 'react-router-dom';
import Star from '../star';
import ReviewItem from '../review_item';

class AttractionsReview extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        if (!this.props.reviews) {
            return null;
        }
        const reviews = Object.values(this.props.reviews)
            .map((review) => <ReviewItem review={review}/>)
        return (
            <ul>
                {reviews}
            </ul>
        )
    
    }

}    

export default AttractionsReview;