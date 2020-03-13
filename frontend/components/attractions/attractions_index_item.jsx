import React from 'react';
import * as Util from '../../util/util';
import { Link } from 'react-router-dom';
import Star from '../star';
const AttractionsIndexItem = (props) => {
    // 
    const imgsrc = (props.attraction.photoUrls[0]) ? props.attraction.photoUrls[0] : window.stockURL
    const rating = Math.round(props.attraction.avg_rating * 2) / 2;
    const itemid = (props.type === 'full-map') ? `attraction-${props.attraction.id}` : '';
    return (
        <li 
        id={itemid}
        onMouseEnter={ () => {props.indexHover(props.attraction.id)} }
        onMouseLeave={ () => props.removeHover() }
        >
            <article className="attractions-index-item">
                <figure>
                    <Link to={`/attractions/${props.attraction.id}`}>
                        <img src={imgsrc}/>
                    </Link>
                </figure>
                <div>
                    <ul>
                        <li>
                            <Link to={`/attractions/${props.attraction.id}`}
                            >{props.attraction.name}</Link>
                        </li>
                        {/* <li>{Util.addressMaker(props.attraction)}</li> */}
                        <li><Star rating={rating}/></li>
                    </ul>
                </div>

            </article>
        </li>
    )
};

export default AttractionsIndexItem;