import { connect } from 'react-redux';
import AttractionReviewForm from './attraction_review_form';
import { fetchAttraction, clearAttraction , createAttractionReview } from '../../actions/attraction_actions';
// import { updateFilter } from '../../actions/filter_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({ entities, ui, session, errors }) => {
    return {
        show: ui.attraction,
        reviews: entities.reviews,
        authorId: session.id,
        errors: errors.review,
    };

};

const mapDispatchToProps = dispatch => ({
    fetchAttraction: (id) => dispatch(fetchAttraction(id)),
    clearAttraction: () => dispatch(clearAttraction()),
    createAttractionReview: (review, history) => dispatch(createAttractionReview(review, history)),
});


// connect(mapStateToProps, mapDispatchToProps)(BenchIndex);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AttractionReviewForm));