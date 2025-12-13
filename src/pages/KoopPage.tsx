import "./KoopPage.css";

export function KoopPage() {
  return (
    <div className="koop-page">
      <section className="koop-intro">
        <p className="lead-text">
          Een boek fysiek uitgeven is duur: papier, drukker, opslag, verzending… het tikt allemaal aan. 
          Een ePub kost dat allemaal niet – die komt na bestelling direct digitaal jouw kant op. 
          Wil je gewoon een papieren boek dat binnen vijf werkdagen op je deurmat ligt? 
          Bestel 'm dan via BraveNewBooks of kies hieronder voor de ePub.
        </p>
      </section>

      <section className="koop-opties">
        <h2>Bestelopties</h2>
        <div className="opties-grid">
          <div className="optie-card">
            <h3>Fysiek boek via BraveNewBooks</h3>
            <p>Wil je een fysiek boek dat rechtstreeks door BraveNewBooks wordt gedrukt en verzonden?</p>
            <a href="#" className="cta-button primary">Bestel fysiek boek</a>
          </div>
          <div className="optie-card">
            <h3>ePub versie</h3>
            <p>Liever meteen beginnen met lezen op je e-reader, tablet of telefoon?</p>
            <a href="#" className="cta-button primary">Bestel ePub</a>
          </div>
        </div>
      </section>

      <section className="koop-uitleg">
        <h2>Waarom deze prijzen?</h2>
        <div className="uitleg-content">
          <p>
            Voor een indie-auteur als ik zijn de kosten per boek relatief hoog. Bij een fysieke verkoop via 
            BraveNewBooks gaat een groot deel van de prijs naar drukwerk, papier, BTW en het platform. 
            Bij een verkoopprijs van €<strong>[totaalprijs]</strong> blijft er na alle kosten ongeveer 
            €<strong>[mijn marge]</strong> per boek voor mij over.
          </p>
          <p>
            Ik heb meerdere grote uitgevers benaderd, maar zij kozen er uiteindelijk voor om De Waterman niet 
            uit te geven. Self-publishing is dan de enige manier om dit verhaal toch de wereld in te krijgen – 
            met jouw aankoop steun je dus rechtstreeks een onafhankelijke schrijver.
          </p>
        </div>
      </section>

      <section className="koop-direct">
        <h2>Rechtstreeks bij mij bestellen</h2>
        <p>
          Je kunt De Waterman ook rechtstreeks bij mij bestellen. Dan betaal je €<strong>[prijs verzending]</strong> 
          inclusief verzendkosten en stuur ik het boek binnen twee weken naar je op. Kom je het liever zelf 
          ophalen in <strong>[plaats]</strong>? Dan kost het boek €<strong>[prijs ophalen]</strong> en drinken we 
          er als je wilt een kop koffie bij.
        </p>
        <a href="#" className="cta-button secondary">Plaats hier je bestelling</a>
      </section>
    </div>
  );
}
  