import { connect } from 'react-redux';
import AttractionReviewForm from './attraction_review_form';
import { fetchAttraction, clearAttraction } from '../../actions/attraction_actions';
// import { updateFilter } from '../../actions/filter_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({ entities, ui, session }) => {
    return {
        show: ui.attraction,
        reviews: entities.reviews,
        authorId: session.id
    };

};

const mapDispatchToProps = dispatch => ({
    fetchAttraction: (id) => dispatch(fetchAttraction(id)),
    clearAttraction: () => dispatch(clearAttraction()),
});


// connect(mapStateToProps, mapDispatchToProps)(BenchIndex);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AttractionReviewForm));