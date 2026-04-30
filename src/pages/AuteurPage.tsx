import persfoto from "../assets/PXL_20260315_153040625.jpg";
import "./AuteurPage.css";

export function AuteurPage() {
  return (
    <div className="author-page persfotos-page">
      <div className="persfotos-header">
        <span className="persfotos-badge">Media-afdeling</span>
        <h1>Persfoto&apos;s</h1>
        <p className="persfotos-intro">
          Persfoto&apos;s van De Waterman voor journalisten, redacteuren, bloggers en recensenten.
        </p>
      </div>

      <div className="persfotos-content">
        <figure className="persfoto-container">
          <img
            src={persfoto}
            alt="Persfoto Stan Plandsoen, auteur van De Waterman"
            className="persfoto-image"
          />
          <figcaption className="persfoto-caption">
            Officiële persfoto • Vrij te gebruiken bij vermelding van De Waterman
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
  