import authorPhoto from "../assets/profielfoto.jpg";
import "./AuteurPage.css";

export function AuteurPage() {
  return (
    <div className="author-page">
      <div className="author-hero">
        <div className="author-photo-container">
          <img src={authorPhoto} alt="Stan Plandsoen" className="author-photo" />
        </div>
        <div className="author-intro">
          <h1>Stan Plandsoen</h1>
          <p className="author-birth">Auteur De Waterman</p>
        </div>
      </div>

      <div className="author-content">
        <section className="author-bio">
          <p className="lead-text">
         De Waterman is mijn debuutroman. Ik heb het een kroegroman genoemd, dat klinkt gezelliger dan existentieel mannendrama aan de bar. Het grootste gedeelte schreef ik al jaren terug, maar ik heb het pas recent afgerond. Goed om te weten: het is geen autobiografie. Veel leesplezier!
         </p>
        </section>
      </div>
    </div>
  );
}
  