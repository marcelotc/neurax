import PushNotification from "react-native-push-notification";

export default notifications = (choosedActivitiesArray, timeOne = [timeOne]) => {
    console.log('choosedActivitiesArray notifications', choosedActivitiesArray)
    console.log('timeOne notifications', timeOne)

    PushNotification.configure({
        onRegister: function (token) {
            console.log("TOKEN:", token);
        },

        onRegistrationError: function (err) {
            console.error(err.message, err);
        },

        permissions: {
            alert: true,
            badge: true,
            sound: true,
        },

        popInitialNotification: true,

        requestPermissions: false,
    });

    for (let i = 0; i <= timeOne.length; i++) {
        if (timeOne[i] != undefined) {
            const data = new Date(timeOne[i]);
            PushNotification.localNotificationSchedule({
                title: "Você possuí uma atividade hoje!",
                message: choosedActivitiesArray[i],
                date: data,
            });
        }
    }
}

//PushNotification.cancelAllLocalNotifications()
