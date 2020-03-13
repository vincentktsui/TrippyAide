import React from 'react';
import { Link } from 'react-router-dom';
import Star from './star';
class ReviewItem extends React.Component {
    render() {
        // debugger
        const creation = new Date(this.props.review.created_at)
        .toLocaleDateString('default', {month: 'short', year: 'numeric'})

        const visitdate = (this.props.review.visit_date) ? 
            (<div>
                <span>Date of experience: </span>
                {new Date(this.props.review.visit_date)
            .toLocaleDateString('default', {month: 'short', year: 'numeric' })}</div>) : ''
        return (
            <li>
                <article className="review-item">
                    <div>
                        <span>{this.props.review.display_name}</span> wrote a review {creation}
                    </div>
                    <div>
                        <ul>
                            <li><Star rating={this.props.review.rating} /></li>
                            <li><h2>{this.props.review.title}</h2></li>
                            <li>
                            <p>
                                {this.props.review.body}
                            </p>
                            </li>
                        </ul>
                    </div>
                    {visitdate}
    
                </article>
            </li>
        )

    }
}

export default ReviewItem;