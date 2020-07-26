export const choosedActivitiesArray = (activities) => {
    return {
        type: 'ADD-CHOOSED-ACTIVITIES',
        payload: {
            activities
        }
    }
}