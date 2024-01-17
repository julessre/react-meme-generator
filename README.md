# React Meme Generator

This is a web app with React that allows for users to generate and download memes using the https://memegen.link/ website.

## TO DOs

- [-] Search library for link scrapping
  - [-] Implement library for link scrapping
- [x] Create a extra file for the Generator Mask
- [x] Import Generator Mask into App.js
- [x] Create a headline
- [x] Create empty text boxes (on first page load)
  - [x] Create a input box on top of the meme
    - [x] Associate label element `Top text` with text box
  - [x] Create a input box on bottom of meme
    - [x] Associate label element `Bottom text` with text box
- [x] Create a space to preview the generated meme
  - [x] The image element needs to have an html attribute set as follows: `data-test-id="meme-image"`
  - [x] This image element should show a working image when the page first loads
- [x] Change the meme template (the background image)
  - [x] The meme template selector element needs to have a label element associated with it containing the text `Meme template`
  - [x] If the user follows the steps below, the `doge` meme template needs to be selected:
    1. Click on the label of the meme template selector
    2. Clear any existing value (eg. with a text box)
    3. Type the text `doge`
    4. Hit enter
- [ ] Create a .scss file for design of the input boxes
- [ ] Create a .scss file for design of the buttons
- [ ] Downloading the image
  - [ ] Search for a download library
  - [ ] Implement download library
  - [x] Create a button for download
  - [ ] The button element needs to contain the text `Download`
