import journals from "./data";
import "./App.css";

function TravelCard({ location }) {
  return (
    <div className="card">
      <img src={location.imageUrl} alt={location.title} className="card-img" />
      <div className="card-content">
        <div className="card-country">
          <span className="country-pin">📍</span>
          <span className="country">{location.country}</span>
          <a href={location.mapUrl} target="_blank" rel="noopener noreferrer" className="map-link">
            View on Google Maps
          </a>
        </div>
        <h2 className="card-title">{location.title}</h2>
        <span className="card-date">{location.date}</span>
        <p className="card-desc">{location.description}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <header className="header">
        <span className="header-logo">🌎</span>
        <span className="header-title">my travel journal.</span>
      </header>
      <main>
        {journals.map((loc, idx) => (
          <TravelCard key={idx} location={loc} />
        ))}
      </main>
    </div>
  );
}

export default App;
