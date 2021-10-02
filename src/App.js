import illushero from "./images/illustration-hero.svg";
import musicIcon from "./images/icon-music.svg";
function App() {
  return (
    <>
      <div className='bk-overlay'></div>
      <div className='bk-overlay-2'></div>
      <div className='container'>
        <div className='card-container'>
          <div className='imgHero'>
            <img src={illushero} alt='' />
          </div>

          <div className='content'>
            <h3>Order Summary</h3>
            <p>
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
            <div className='annual-plan'>
              <div className='musicon'>
                <img src={musicIcon} alt='' />
              </div>
              <div className='a-text'>
                <h5> Annual Plan</h5>
                <p> $59.99/year</p>
              </div>
              <div className='a-btn'>
                <a href='#'> Change</a>
              </div>
            </div>
            <div className='order-btn'>
              <button>Proceed to Payment</button>
            </div>
            <div className='cancel-btn'>
              <a href='#'>Cancel Order</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
