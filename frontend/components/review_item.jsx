import React from 'react';
import { Link } from 'react-router-dom';
import Star from './star';
class ReviewItem extends React.Component {
    render() {
        // debugger
        const creation = new Date(this.props.review.created_at)
        .toLocaleDateString('default', {month: 'short', year: 'numeric'})

        const visitdate = (this.props.review.visit_date) ? 
            (<li>
                <span>Date of experience: </span>
                {new Date(this.props.review.visit_date)
            .toLocaleDateString('default', {month: 'short', year: 'numeric' })}</li>) : ''
        return (
            <li>
                <article className="review-item">
                    <div>
                        {this.props.review.display_name} wrote a review {creation}
                    </div>
                    <div>
                        <ul>
                            <li><Star rating={this.props.review.rating} /></li>
                            <li><h2>{this.props.review.title}</h2></li>
                            <li><div>
                                {this.props.review.body}
                            </div></li>
                            {visitdate}
                        </ul>
                    </div>
        
                </article>
            </li>
        )

    }
}

export default ReviewItem;