import { combineReducers } from 'redux';
import resultado from './resultado';
import activities from './activities';
import choosedActivities from './choosedActivities';
import calendar from './calendar';

export default combineReducers({
    resultado,
    activities,
    choosedActivities,
    calendar
})