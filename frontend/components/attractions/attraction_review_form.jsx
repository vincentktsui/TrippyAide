import React from 'react';
import { Link } from 'react-router-dom';
import * as Util from '../../util/util';
import Star from '../star';
import ReviewItem from '../review_item';

class AttractionReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            attraction_id: this.props.match.params.attractionId,
            author_id: this.props.authorId,
            title: "",
            body: "",
            hover_rating: 0,
            rating: undefined,
            visit_date: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchAttraction(this.props.match.params.attractionId)
            .then( () => {
                let that = $('#review-form-body');
                that.on('input', () => {
                    $(that).css("height", 'auto');
                    let scrollHeight = that[0].scrollHeight;
                    $(that).css("height", scrollHeight);
                })
        });

    }

    componentWillUnmount() {
    }
    
    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    getLastTwelveMonths() {
        let now = new Date();
        let months = [];
        for (let i = 0; i < 12; i++) {
            months.push(new Date(now.getFullYear(), now.getMonth() - i, 1));
        }
        return months;
    }

    setHoverStars(rating) {
        this.setState({hover_rating: rating});
    }

    setStars(rating) {
        this.setState({ rating: rating });
    }

    getStar(number) {
        const starclass = (this.state.hover_rating !== 0) ? 
            (this.state.hover_rating >= number) ? 
                "fa fa-star selectable" : 
                "fa fa-star-o selectable"
            : (this.state.rating >= number) ? 
                "fa fa-star selectable" :
                "fa fa-star-o selectable"
        const star = <span 
                        onMouseEnter={() => this.setHoverStars(number)}
                        onMouseLeave={() => this.setHoverStars(0)}
                        onMouseDown={() => this.setStars(number)} 
                        className={starclass}
                        ></span>;
        return star;
    }
    getStars() {
        return (
            <div>
                {this.getStar(1)}
                {this.getStar(2)}
                {this.getStar(3)}
                {this.getStar(4)}
                {this.getStar(5)}
            </div>
        )
    }

    render() {
        if (!this.props.show || this.props.show.id !== parseInt(this.props.match.params.attractionId)) {
            return null;
        }
        const errors = this.props.errors.map( (error) => <li key={Math.random()}>{error}</li>);
        const months = this.getLastTwelveMonths();
        const options = months.map(month => {
            return <option value={month}>{month.toLocaleDateString('default', {month: 'long', year: 'numeric'})}</option>
        })
        const imgsrc = (this.props.show.photoUrls[0]) ? this.props.show.photoUrls[0] : window.stockURL;
        const address = Util.addressMaker(this.props.show);
        const reviews = Object.values(this.props.reviews)
        .sort( (a, b) => {
            if (b.created_at > a.created_at)
                return 1;
            else
                return -1;
        })
        .slice(0, 3)
        .map( (review) => <ReviewItem key={review.id} review={review}/>);
        return (
            <div className="review-form-screen">
                <form className="review-form">
                    <div>
                        <img src={imgsrc}/>
                        <section>
                            <h3>{this.props.show.name}</h3>
                            <h4>{address}</h4>
                        </section>
                    </div>
                    <h2>Your first-hand experiences really help other travelers. Thanks!</h2>
                    <label htmlFor="review-form-rating">Your overall rating of this attraction</label>
                    <br/>
                    {this.getStars()}
                    <label htmlFor="review-form-title">Title of your review</label>
                    <br/>
                    <input 
                        id="review-form-title" 
                        type="text"
                        placeholder="Summarize your visit or highlight an interesting detail"
                        value={this.state.title}
                        onChange={this.handleInput('title')}/>
                    <br/>
                    <label htmlFor="review-form-body">Your review</label>
                    <br/>
                    <textarea 
                        id="review-form-body" 
                        placeholder="Tell people about your experience: describe the place or activity, recommendations for travelers?"
                        value={this.state.body}
                        onChange={this.handleInput('body')}/>
                    <br/>
                    <label htmlFor="review-form-visit-date">When did you visit?</label>
                    <br/>
                    <select 
                        name="visit-date" 
                        id="review-form-visit-date"
                        onChange={this.handleInput('visit_date')}>
                        <option disabled="disabled" selected="true" value="">Select one</option>
                        {options}
                    </select>
                    <br/>
                    <ul>
                        {errors}
                    </ul>
                    <button 
                        onClick={this.handleSubmit}
                        className="black-button"
                        >Submit your review
                    </button>
                </form>
                <aside className="recent-reviews">
                    <h3>Recent reviews of this attraction</h3>
                    <ul>
                        {reviews}
                    </ul>
                </aside>
            </div>
        )
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }
    handleSubmit(e) {
        e.preventDefault();
        const review = Object.assign({}, this.state);
        delete review.hover_rating;
        this.props.createAttractionReview(review, this.props.history);
    }
}

export default AttractionReviewForm;