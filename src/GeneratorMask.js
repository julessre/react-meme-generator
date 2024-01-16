export default function GeneratorMask() {
  return (
    <>
      <h1>React Meme Generator</h1>
      <p>Enter your top Text here:</p>
      <label>
        <input name="Top text" className="topText" />{' '}
      </label>
      <br />
      <br />
      <p>Enter your bottom Text here:</p>
      <label>
        <input name="Bottom text" className="bottomText" />{' '}
      </label>
      <br />
      <br />
      <p>Enter your Meme Background here:</p>
      <label>
        <input name="meme background" className="memeBackground" />{' '}
      </label>
      <br />
      <br />
      <h3>Your meme looks like this:</h3>
    </>
  );
}
