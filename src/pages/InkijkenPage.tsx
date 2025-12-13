import "./InkijkenPage.css";

export function InkijkenPage() {
  return (
    <div className="preview-page">
      <div className="preview-header">
        <h1>Inkijken</h1>
        <p className="preview-intro">
          Lees hier de eerste pagina's van <em>De Waterman</em> en proef de sfeer van Kladdegat.
        </p>
      </div>

      <div className="preview-content">
        <div className="preview-text">
          <p className="preview-note">
            <em>Binnenkort beschikbaar: een uitgebreid fragment uit het eerste hoofdstuk.</em>
          </p>
          
          <div className="preview-placeholder">
            <p>
              Hier komt binnenkort een fragment uit <em>De Waterman</em>. Je kunt dan de eerste 
              pagina's lezen en een indruk krijgen van het verhaal, de sfeer en de schrijfstijl.
            </p>
            
            <p>
              Wil je op de hoogte blijven wanneer het fragment beschikbaar is? Houd deze pagina 
              in de gaten of neem contact op via de auteurspagina.
            </p>
          </div>

          <div className="preview-cta">
            <p className="cta-text">Benieuwd naar meer?</p>
            <div className="cta-buttons">
              <a href="/koop" className="cta-button primary">Koop het boek</a>
              <a href="/over-de-auteur" className="cta-button secondary">Lees over de auteur</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  