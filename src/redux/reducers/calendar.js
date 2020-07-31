const CALENDAR = []

const activitiesCalendar = (state = CALENDAR, action) => {
    switch (action.type) {
        case 'ADD-ACTIVITIES-CALENDAR':
            return [...state, action.payload]
        default:
            return state
    }
}

export default activitiesCalendar;