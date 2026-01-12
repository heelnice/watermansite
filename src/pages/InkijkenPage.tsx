import "./InkijkenPage.css";

export function InkijkenPage() {
  const pdfUrl = "/Inkijkexamplaar.pdf";
  
  return (
    <div className="preview-page">
      <div className="preview-header">
        <h1>Inkijken</h1>
      </div>

      <div className="preview-content">
        <div className="preview-text">
          <p className="preview-note">
            <em>Hieronder vind je het eerste hoofdstuk van De Waterman. Scroll door het document om het volledige fragment te lezen.</em>
          </p>
          
          <div className="pdf-viewer-container">
            <embed
              src={pdfUrl}
              type="application/pdf"
              className="pdf-viewer"
              title="Inkijkexemplaar De Waterman"
            />
            <div className="pdf-fallback">
              <p>Kan de PDF niet laden in de browser? <a href={pdfUrl} target="_blank" rel="noopener noreferrer">Klik hier om het bestand te openen of te downloaden</a>.</p>
            </div>
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
  