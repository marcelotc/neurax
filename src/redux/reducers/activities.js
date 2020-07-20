const ACTIVITIES = []

const selectedActivities = (state = ACTIVITIES, action) => {
    switch (action.type) {
        case 'ADD-ACTIVITIES':
            return [...state, action.payload]
        default:
            return state
    }
}

export default selectedActivities;