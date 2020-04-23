import * as HotelUtil from '../util/hotel_api_util';

export const RECEIVE_HOTELS = "RECEIVE_HOTELS";

export const receiveHotels = hotels => ({
    type: RECEIVE_HOTELS,
    hotels
});

export const fetchHotels = () => dispatch => {
    return HotelUtil.fetchHotels()
        .then( (hotels) => {
            dispatch(receiveHotels(hotels))
            // console.log(hotels);
        })
        // .fail(errors => console.log(errors))
};
