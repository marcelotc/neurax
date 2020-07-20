export const selectedActivitiesArray = (activities) => {
    return {
        type: 'ADD-ACTIVITIES',
        payload: {
            activities
        }
    }
}