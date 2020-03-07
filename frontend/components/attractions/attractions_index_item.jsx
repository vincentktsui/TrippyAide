import React from 'react';
import * as Util from '../../util/util';
import { Link } from 'react-router-dom';
const AttractionsIndexItem = (props) => {
    // 
    return (
        <li>
            <article className="attractions-index-item">
                <figure>
                    <Link to={`/attractions/${props.attraction.id}`}>
                        <img src={props.attraction.photoUrls[0]}/>
                    </Link>
                </figure>
                <div>
                    <ul>
                        <li>
                            <Link to={`/attractions/${props.attraction.id}`}
                            >{props.attraction.name}</Link>
                        </li>
                        {/* <li>{Util.addressMaker(props.attraction)}</li> */}
                        <li>Reviews</li>
                    </ul>
                </div>

            </article>
        </li>
    )
};

export default AttractionsIndexItem;