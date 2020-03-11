import React from 'react';

const Star = (props) => {
    // debugger
    switch(props.rating) {
        case 0:
            return (<span>
                <span className="fa fa-star-o"></span>
                <span className="fa fa-star-o"></span>
                <span className="fa fa-star-o"></span>
                <span className="fa fa-star-o"></span>
                <span className="fa fa-star-o"></span>
            </span>)
        case 0.5:
            return (<span>
                <span className="fa fa-star-half-o"></span>
                <span className="fa fa-star-o"></span>
                <span className="fa fa-star-o"></span>
                <span className="fa fa-star-o"></span>
                <span className="fa fa-star-o"></span>
            </span>)
        case 1:
            return (<span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star-o"></span>
                <span className="fa fa-star-o"></span>
                <span className="fa fa-star-o"></span>
                <span className="fa fa-star-o"></span>
            </span>)
        case 1.5:
            return  (<span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star-half-o"></span>
                <span className="fa fa-star-o"></span>
                <span className="fa fa-star-o"></span>
                <span className="fa fa-star-o"></span>
            </span>)
        case 2:
            return (<span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star-o"></span>
                <span className="fa fa-star-o"></span>
                <span className="fa fa-star-o"></span>
            </span>)
        case 2.5:
            return  (<span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star-half-o"></span>
                <span className="fa fa-star-o"></span>
                <span className="fa fa-star-o"></span>
            </span>)
        case 3:
            return  (<span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star-o"></span>
                <span className="fa fa-star-o"></span>
            </span>)
        case 3.5:
            return (<span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star-half-o"></span>
                <span className="fa fa-star-o"></span>
            </span>)
        case 4:
            return (<span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star-o"></span>
            </span>)

        case 4.5:
            return (<span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star-half-o"></span>
            </span>)
        case 5:
            return (<span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
            </span>)
        default:
            return;
    }
}

export default Star;
