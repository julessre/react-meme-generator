import { saveAs } from 'file-saver';
import React, { useState } from 'react';
import styles from './buttonDesign.module.scss';
import page from './pageDesign.module.scss';

export default function App() {
  const [topText, setTopText] = useState('Hello');
  const [bottomText, setBottomText] = useState('partypeople');
  const [createMeme, setCreateMeme] = useState('doge');

  const url = `https://api.memegen.link/images/${createMeme}/${
    topText === ' ' ? '%20' : topText
  }/${bottomText}.png`;

  return (
    <div className={page.content}>
      <h1>React Meme Generator</h1>
      <label className={page.inputField}>
        Top text
        <br />
        <br />
        <input
          name="Top text"
          className="topText"
          placeholder="Top Text"
          onChange={(event) => {
            setTopText(event.currentTarget.value);
          }}
        />{' '}
      </label>
      <br />
      <br />
      <label className={page.inputField}>
        Bottom text
        <br />
        <br />
        <input
          name="Bottom text"
          className="bottomText"
          placeholder="Bottom Text"
          onChange={(event) => {
            setBottomText(event.currentTarget.value);
          }}
        />{' '}
      </label>
      <br />
      <br />
      <label className={page.inputField}>
        Meme template
        <br />
        <br />
        <input
          name="meme background"
          className="memeBackground"
          placeholder="Meme template"
          onChange={(event) => {
            setCreateMeme(event.currentTarget.value);
          }}
        />{' '}
      </label>
      <br />
      <br />
      <h3>Your meme looks like this:</h3>
      <div>
        <img src={url} alt="created Meme" data-test-id="meme-image" />
      </div>
      <br />
      <br />
      <button
        onClick={() => saveAs(url, 'my-meme.jpg')}
        className={styles.button}
      >
        Download
      </button>
    </div>
  );
}
