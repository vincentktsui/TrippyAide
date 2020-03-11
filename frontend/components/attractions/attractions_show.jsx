import React from 'react';
import * as Util from '../../util/util';
import Star from '../star';
// import AttractionsIndexItem from './attractions_index_item';

class AttractionsShow extends React.Component {
    // componentDidMount() {
    //     this.props.fetchAttraction(this.props.match.params.attractionId);
    // }
    // componentDidUpdate(prevProps) {
    //     if (prevProps.match.params.attractionId !== 
    //         this.props.match.params.attractionId){
    //             this.props.fetchAttraction(
    //                 this.props.match.params.attractionId);
    //     }
    // }

    
    render() {
        if (Object.keys(this.props.show).length === 0) {
            return null;
        }
        // debugger
        const address = Util.addressMaker(this.props.show);
        const imgsrc = (this.props.show.photoUrls[0]) ? this.props.show.photoUrls[0] : window.stockURL;
        const rating = Math.round(this.props.show.avg_rating * 2) / 2;
        return (
            <div className="attraction-show-outer">
                <div>
                    <section className='attraction-show-top'>
                        <div>
                            <h1>{this.props.show.name}</h1>
                            <div>
                                <Star rating={rating}/>
                                <span>{this.props.show.num_rating} Reviews</span>
                            </div>
                        </div>
                        <div>
                            Extra stuff
                        </div>
                    </section>
                    <section className="attraction-show-bot">
                        <div>
                            <h2>Overview</h2>
                            <div>
                                <section>{this.props.show.about}</section>
                                <section>Address: {address}</section>
                            </div>
                        </div>
                        <div>
                            Edit
                        </div>
                    </section>
                </div>
                <figure>
                    <img src={imgsrc}/>
                </figure>
            </div>
        )
    }
}

export default AttractionsShow;