# Flashcards
Flashcards is an app to help you study. It allows you to create decks of cards, add cards (each one has a question and an answer) to these decks and run a quiz to test your own skills. At the end of the quiz, you'll see your score.

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
If you don't want to follow the previous section steps, I've built an `.apk` file and you can download it from [here](https://exp-shell-app-assets.s3-us-west-1.amazonaws.com/android%2F%40luizcns%2Fflashcards-96ca8289-1577-11e8-b92e-0a580a78340d-signed.apk). 
```
https://exp-shell-app-assets.s3-us-west-1.amazonaws.com/android%2F%40luizcns%2Fflashcards-96ca8289-1577-11e8-b92e-0a580a78340d-signed.apk
```
To run it on your Android device, make sure you have the Android platform tools installed along with adb, then just run adb install app-filename.apk with [USB debugging enabled](https://developer.android.com/studio/run/device.html#device-developer-options) on your device and the device plugged in.

## Tested Platforms
This app was only tested on android devices. Therefore, it's not possible to guarantee it will run on iOS devices too.

## Preview
The app looks like this:
<p align="center">
    <img src="https://user-images.githubusercontent.com/12154623/36337029-495ca0b8-136d-11e8-9c00-f7b3e428f5e1.png" width=150 >
    <img src="https://user-images.githubusercontent.com/12154623/36337046-6b381dc0-136d-11e8-9a7e-a3c7dc399c48.png" width=150 >
    <img src="https://user-images.githubusercontent.com/12154623/36337059-878493b4-136d-11e8-937f-a0e43efd2591.png" width=150 >
    <img src="https://user-images.githubusercontent.com/12154623/36337072-a63415b4-136d-11e8-89d5-b45ba9b26651.png" width=150 >
</p> 
<p align="center">
    <img src="https://user-images.githubusercontent.com/12154623/36337075-c53980d4-136d-11e8-81e9-53b5a2a3c14e.png" width=150 >
    <img src="https://user-images.githubusercontent.com/12154623/36337174-32bf0f74-136f-11e8-812f-29e48557c626.png" width=150 >
    <img src="https://user-images.githubusercontent.com/12154623/36337177-49c64336-136f-11e8-8fa9-1a5be8e869ee.png" width=150 >
    <img src="https://user-images.githubusercontent.com/12154623/36337077-c79c0432-136d-11e8-8627-d6e6bec80cf4.png" width=150 >
</p> 

## create-react-native-app
This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app). You can find more information on how to perform common tasks [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).