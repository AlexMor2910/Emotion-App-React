# Emotion-App-React

This project renders a simple React-based UI to display and interact with different emotional states. It consists of a main `App` component and a reusable `DivEmotions` component, styled using `index.css`.

## Overview

The **App** component (`App.jsx`) defines a list of five emotions:
- Happy 😁 (yellow)
- Sad 😭 (lightblue)
- Neutral 😐 (gray)
- Angry 😠 (red)
- Afraid 😧 (purple)

Each emotion is rendered using the `DivEmotions` component, which includes:
- A button showing the emotion.
- A counter indicating how many times it has been clicked.
- A dynamic background color for both the button container and the page body when clicked.

## Styling

Styles are defined in `index.css` and include:
- `.main-div`: Flex row layout to align all emotion components side-by-side.
- `.button-div`: Container with margins, borders, and a color transition.
- `.button-emotion`: Large, bold button style with rounded corners.
- `.paragraph-emotion`: Centered text for the click count.

## How It Works

Clicking any emotion button:
- Increments its individual counter.
- Changes the page background to the color associated with the emotion.

## Files
- `App.jsx`: Main component that maps emotion data to UI.
- `DivEmotions.jsx`: Subcomponent for each emotion button and counter.
- `index.css`: CSS rules for layout and appearance.
