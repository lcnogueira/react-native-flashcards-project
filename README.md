# Flashcards
Flashcards is an app to help you study. It allows you to create decks of flashcards, add cards (each one has a question and an answer) to the decks and run a quiz to test your own skills. At the end of the quiz, you'll see your score.

This project was developed as a part of the [Udacity's React course](https://br.udacity.com/course/react-nanodegree--nd019).

## How to start the app
1. After cloning this project, create a file `/utils/config.js`, like this:
```
export const config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
};
```
2. Create a firebase project and replace the information above with your project's customized code snippet.

3. Install and run the app:
```
cd react-native-flashcards
yarn install
yarn start
```
You can use the Expo app on your phone or install a simulator on your computer to see this app running.

## APK File
If you don't want to follow the previous section steps, I've built an `.apk` file and you can download it from [here](TODO: include apk link here).

## Tested Platforms
This app was only tested on android devices. Therefore, it's not possible to guarantee it will run on iOS devices too.

## Preview
The app will look like this:
<p align="center">
    <!-- <img src="path_to_image" width=250 > -->
</p> 

## create-react-native-app
This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app). You can find more information on how to perform common tasks [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).