import React from 'react';
import { Link } from 'react-router-dom';
import ReviewItem from '../review_item';

class AttractionsReview extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { page: 1 };
        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
    }

    nextPage() {
        // debugger
        if (this.state.page < Math.floor(
            Object.keys(this.props.reviews).length / 20) + 1) {
            this.setState({ page: this.state.page + 1 });
        }
    }
    prevPage() {
        if (this.state.page > 1) {
            this.setState({ page: this.state.page - 1 });
        }
    }
    render() {
        if (!this.props.reviews) {
            return null;
        }
        const nextdisabled = (this.state.page >= Math.floor(
            Object.keys(this.props.reviews).length / 20) + 1) ? true : false;
        const prevdisabled = (this.state.page <= 1) ? true : false;
        // debugger
        const reviews = Object.values(this.props.reviews)
            .sort((a, b) => b.created_at > a.created_at)
            .slice((this.state.page - 1) * 20, this.state.page * 20)
            .map((review) => <ReviewItem key={review.id}
             review={review}/>)
        return (
            <div className="reviews-tab">
                <div>

                </div>
                <ul>
                    {reviews}
                    <li>
                        <button
                            className="black-button"
                            onClick={this.prevPage}
                            disabled={prevdisabled}>Previous</button>
                        <button
                            className="black-button"
                            onClick={this.nextPage}
                            disabled={nextdisabled}>Next</button>
                    </li>
                </ul>

            </div>
        )
    
    }

}    

export default AttractionsReview;