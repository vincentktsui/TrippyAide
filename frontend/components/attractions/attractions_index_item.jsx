import React from 'react';
import * as Util from '../../util/util';
const AttractionsIndexItem = (props) => {
    // 
    return (
        <li>
            <article className="attractions-index-item">
                <figure>
                    <img src={window.stockURL}/>
                </figure>
                <div>
                    <ul>
                        <li>{props.attraction.name}</li>
                        {/* <li>{Util.addressMaker(props.attraction)}</li> */}
                        <li>Reviews</li>
                    </ul>
                </div>

            </article>
        </li>
    )
};

export default AttractionsIndexItem;