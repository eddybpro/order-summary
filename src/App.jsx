import illustrationHero from "./assets/illustration-hero.svg";
import MusicIcon from "./assets/icon-music.svg";
import "./App.css";

function App() {
  return (
    <main>
      <div className="head">
        <img src={illustrationHero} alt="illustration hero" />
      </div>
      <div className="txt-container">
        <h1 className="title">order summary</h1>
        <p className="para">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="price-box">
          <div className="icon-price-box">
            <img src={MusicIcon} alt="" />
            <div className="price">
              <strong>annual plan</strong>
              <p>$59.99/year</p>
            </div>
          </div>

          <a href="#" className="link">
            change
          </a>
        </div>

        <button className="pay">proceed to payment</button>
        <button className="cancel">cancel order</button>
      </div>
    </main>
  );
}

export default App;
