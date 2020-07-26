const CHOOSED_ACTIVITIES = []

const choosedActivitiesFunc = (state = CHOOSED_ACTIVITIES, action) => {

    switch (action.type) {
        case 'ADD-CHOOSED-ACTIVITIES':
            return [...state, action.payload]
        default:
            return state
    }
}

export default choosedActivitiesFunc;