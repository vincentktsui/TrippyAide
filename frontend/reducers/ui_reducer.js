import filtersReducer from './filters_reducer';
import mapFiltersReducer from './map_filters_reducer';
import homeFiltersReducer from './home_filters_reducer';
import { combineReducers } from 'redux';
import attractionReducer from './attraction_reducer';
import homeAttractionsReducer from './home_attractions_reducer';
import mapAttractionsReducer from './map_attractions_reducer';
import showAttractionsReducer from './show_attractions_reducer';

export default combineReducers({
    attraction: attractionReducer,
    mapFilters: mapFiltersReducer,
    homeFilters: homeFiltersReducer,
    filters: filtersReducer,
    mapAttractions: mapAttractionsReducer,
    homeAttractions: homeAttractionsReducer,
    showAttractions: showAttractionsReducer
});