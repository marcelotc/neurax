import { combineReducers } from 'redux';
import resultado from './resultado';
import activities from './activities';
import choosedActivities from './choosedActivities';

export default combineReducers({
    resultado,
    activities,
    choosedActivities
})