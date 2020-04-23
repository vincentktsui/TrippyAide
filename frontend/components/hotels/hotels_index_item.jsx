import React from 'react';
import * as Util from '../../util/util';
import { Link } from 'react-router-dom';
import Star from '../star';
const HotelsIndexItem = (props) => {
    // 
    const imgsrc = props.hotel.photos[0].getUrl();
    const rating = Math.round(props.hotel.rating * 2) / 2;
    return (
        <li
        >
            <article className="hotels-index-item">
                <figure>
                    {/* <Link to={`/hotels/${props.attraction.id}`}> */}
                        <img src={imgsrc} />
                    {/* </Link> */}
                </figure>
                <div>
                    <ul>
                        <li>
                            {/* <Link to={`/attractions/${props.attraction.id}`} */}
                            {/* > */}
                            {props.hotel.name}
                            {/* </Link> */}
                        </li>
                        {/* <li>{Util.addressMaker(props.attraction)}</li> */}
                        <li><Star rating={rating} /></li>
                    </ul>
                </div>

            </article>
        </li>
    )
};

export default HotelsIndexItem;