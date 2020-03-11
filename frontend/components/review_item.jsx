import React from 'react';
import { Link } from 'react-router-dom';
import Star from './star';
class ReviewItem extends React.Component {
    render() {
        return (
            <li>
                <article className="review-item">
                    <div>
                        User Info
                    </div>
                    <div>
                        <Star rating={this.props.review.rating} />
                        <h2>{this.props.review.title}</h2>
                        <div>
                            {this.props.review.body}
                        </div>
                    </div>
        
                </article>
            </li>
        )

    }
}

export default ReviewItem;