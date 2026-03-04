import coverImage from "../assets/boekcover.png";
import kladdegatMap from "../assets/Kladdegat_SP.jpg";
import "./HetBoekPage.css";

export function HetBoekPage() {
  return (
    <div className="book-page">
      <div className="book-hero">
        <div className="book-cover-container">
          <img src={coverImage} alt="De Waterman - Boekomslag" className="book-cover" />
        </div>
        <div className="book-intro">
          <h1 className="book-title">De Waterman</h1>
          <p className="book-subtitle">Een kroegroman over vriendschap, loyaliteit en de botsing tussen een klein dorp en de rest van de wereld</p>
          <div className="book-intro-buttons">
            <a href="/koop" className="cta-button primary">Bestel het boek</a>
            <a href="/inkijken" className="cta-button secondary">Eerst een stukje lezen</a>
          </div>
        </div>
      </div>

      <div className="book-content">
        <section className="synopsis-section">
          <h2>Waar het over gaat</h2>
          <p className="lead-text">
          In de zomer van 2015 lijkt er in het dorp Kladdegat weinig te veranderen. Achter de duinen vormt café ’t Toogdier al jaren het middelpunt van vriendschap, darten en eindeloze nachten.
          </p>
          <p>
Vier vrienden – Marcel, Theo, Anthony en Ruud – houden er elkaar overeind met bier, humor en herinneringen. Maar onder de oppervlakte begint iets te schuiven. Theo reist naar steeds verdere bestemmingen, Marcel twijfelt of Kladdegat hem klein houdt of juist beschermt, Anthony zoekt erkenning en Ruud probeert alles bij het oude te houden. Intussen verandert het dorp zelf langzaam maar onherroepelijk.
          </p>
          <p>
Wanneer het Groot Kladdegats Darttoernooi aanbreekt, komen alle spanningen en verhalen samen op één tumultueuze avond.
          </p>
          <p>
De Waterman is een kroegroman over onbezonnen proosten, terwijl het leven je langzaam inhaalt.</p>
        </section>
        <section className="map-section">
          <h2>Plattegrond van Kladdegat</h2>
          <div className="map-container">
            <img src={kladdegatMap} alt="Plattegrond van Kladdegat" className="kladdegat-map" />
          </div>
        </section>

        <div className="cta-section">
          <a href="/inkijken" className="cta-button primary">Lees het eerste hoofdstuk</a>
          <a href="/koop" className="cta-button secondary">Informatie over bestellen</a>
        </div>
      </div>
    </div>
  );
}
  