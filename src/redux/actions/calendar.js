export const activitiesCalendarArray = (activities) => {
    return {
        type: 'ADD-ACTIVITIES-CALENDAR',
        payload: {
            activities
        }
    }
}