import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'Flashcards:notifications';

export const getCardsDesc = deck => {
  const { length } = deck.questions;
  return length === 0 ? 'No card' : ( length === 1 ? `${length} card` : `${length} cards`);
}

export const getCardNumberDesc = (deck, index) => `${index+1}/${deck.questions.length}`;

const getPercentage = (value, total) => (value/total * 100).toFixed(2);

export const showResult = (correctAnswers, questions) => 
  `You got ${correctAnswers} of ${questions} ${questions===1 ? 'question':'questions'}!\n(Efficiency: ${getPercentage(correctAnswers, questions)}%)`;

const createNotification = () => ({
  title: 'Hey, you have to study!',
  body: "You didn't complete any quiz today!",
  ios: {
    sound: true,
  },
  android: {
    sound: true,
    priority: 'high',
    sticky: true,
    vibrate: true,
  }
});

export const setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(result => JSON.parse(result))
    .then(data => {
      //If there's no local notification 
      if(data === null){
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            //If the permission is granted
            if(status === 'granted'){
              //It avoids setting two local notifications
              Notifications.cancelAllScheduledNotificationsAsync();

              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(18);
              tomorrow.setMinutes(0);

              Notifications.scheduleLocalNotificationAsync(
                createNotification(), { time: tomorrow, repeat: 'day'}
              );

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));

            }
          })
      }
    });
};

export const clearLocalNotification = () => {
  AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync());
};