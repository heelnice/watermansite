import coverImage from "../assets/coverpng.png";
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
          <p className="book-subtitle">Een roman over vriendschap, loyaliteit en de botsing tussen een klein dorp en de rest van de wereld</p>
          <div className="book-intro-buttons">
            <a href="/koop" className="cta-button primary">Bestel het boek</a>
            <a href="/inkijken" className="cta-button secondary">Eerst een stukje lezen</a>
          </div>
        </div>
      </div>

      <div className="book-content">
        <section className="synopsis-section">
          <h2>Over het boek</h2>
          <p className="lead-text">
            In de zomer van 2015 lijkt er in het kleine dorpje Kladdegat weinig te veranderen. 
            Achter de duinen vormt café 't Toogdier al jaren het middelpunt van vriendschap, 
            traditie en eindeloze nachten.
          </p>
          
          <p>
            Vier mannen – Marcel, zijn broer Theo, Anthony en Ruud – zijn er kind aan huis. 
            Hun dartteam "Gin Partij" is meer dan een sportieve hobby: het team symboliseert 
            de zekerheid dat ze bij elkaar horen, hoe verschillend hun levens ook zijn.
          </p>

          <p>
            Onder de oppervlakte schuift het. Theo reist de wereld over en leidt een leven 
            dat nauwelijks nog raakvlakken heeft met het dorp. Onbedoeld raakt hij verstrikt 
            in een geopolitiek spel. Marcel zoekt houvast in jeugdliefdes en verleidingen, 
            maar worstelt met de vraag of Kladdegat hem klein houdt of juist beschermt. 
            Anthony is de dandy van het gezelschap – ijdel, chaotisch en onbedoeld grappig. 
            Op zoek naar erkenning maakt hij schulden bij de verkeerde mensen. Alleen Ruud 
            probeert stoïcijns de oude patronen te bewaren: het dorp, de kroeg, de vriendschap.
          </p>

          <p>
            Alles komt samen op het hoogtepunt van het dorpsjaar: het Groot Kladdegats 
            Darttoernooi. Waar dit evenement normaal een feest is van drank, spel en lokale 
            trots, komen nu de verschillende ontwrichtende verhaallijnen samen. Terwijl de 
            menigte joelt om elke pijl in het bord, broeit een dreiging die groter is dan 
            het spel, de kroeg of het dorp.
          </p>
        </section>

        <section className="themes-section">
          <h2>Thema's</h2>
          <div className="themes-grid">
            <div className="theme-card">
              <h3>Vriendschap</h3>
              <p>De band tussen vier mannen die elkaar al jaren kennen, maar wier levens uiteen beginnen te lopen.</p>
            </div>
            <div className="theme-card">
              <h3>Dorpsleven</h3>
              <p>De warmte en geborgenheid van een kleine gemeenschap, maar ook de beperkingen die dat met zich meebrengt.</p>
            </div>
            <div className="theme-card">
              <h3>Verlies</h3>
              <p>Hoe je omgaat met het onverwachte verlies van iemand die dichtbij staat.</p>
            </div>
            <div className="theme-card">
              <h3>Volwassen worden</h3>
              <p>De vraag of je kunt blijven wie je bent wanneer alles om je heen verandert.</p>
            </div>
          </div>
        </section>

        <div className="cta-section">
          <a href="/inkijken" className="cta-button primary">Lees een fragment</a>
          <a href="/koop" className="cta-button secondary">Informatie over bestellen</a>
        </div>
      </div>
    </div>
  );
}
  