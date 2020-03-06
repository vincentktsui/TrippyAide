export const addressMaker = ({thoroughfare, locality, administrative_area,
    postal_code, country}) => (
        thoroughfare + ", " + locality + ", " + administrative_area + " " +
        postal_code + " " + country
    )