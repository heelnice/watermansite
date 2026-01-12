import "./KoopPage.css";

export function KoopPage() {
  return (
    <div className="koop-page">
      <section className="koop-opties">
        <h2>Bestelopties</h2>
        <div className="opties-grid">
          <div className="optie-card epub-card">
            <h3>ePub versie</h3>
            <p>Meteen beginnen met lezen op je e-reader, tablet of telefoon? 
              <br />
              <br />
              Hulp nodig bij het installeren van de ePub? Scroll dan naar beneden voor de uitgebreide uitleg.</p>
            <a href="#" className="cta-button primary">Bestel ePub €9</a>
          </div>
          <div className="optie-card">
          <h3>Fysiek boek</h3>
            <p>Liever een fysiek boek dat binnen vijf werkdagen op je deurmat ligt?</p>
            <a href="#" className="cta-button primary">Bestel met verzending (€19,95)</a>
            <p>Je kan het boek ook zelf ophalen of door mij in persoon laten brengen.* Via deze knop betaal je niks maar stuur je gewoon een berichtje.</p>
            <a href="#" className="cta-button primary">Bestel zonder verzending (€13)</a>
          </div>
        </div>
      </section>

      <section className="koop-uitleg">
        <h2>Waarom deze prijzen?</h2>
        <div className="uitleg-content">
          <p>
          Een boek fysiek uitgeven is duur: papier, drukker, opslag, verzending… het tikt allemaal aan. Ik heb meerdere grote uitgevers benaderd, maar zij kozen er uiteindelijk voor om De Waterman niet 
            uit te geven. Self-publishing is dan de enige manier om dit verhaal toch de wereld in te krijgen. Maar dat betekent dat je niet alleen zelf de cover en eindredactie moet doen maar ook alle promotie. Met jouw aankoop steun je dus rechtstreeks een onafhankelijke schrijver.
          </p>
          <p> 
            Koop je het boek via de self-pubish uitgever voor €19,95 dan blijft er voor mij, de auteur, ongeveer €5 over. Een groot deel prijs gaat op aan verzending. Ken je mij? Laten wen dan gewoon afspreken dat ik het een keer kom brengen of via via bij jou krijg. Je hoeft op voorhand nog niet te betalen.
            </p>
        </div>
        <h2>Hulp bij installeren van de ePub</h2>
        <div className="uitleg-content">
          <p>
            De ePub is een digitaal boekformaat dat op je e-reader, tablet of telefoon kan worden gelezen. 
            Het is een standaardformaat dat op verschillende apparaten werkt.
          </p>
        </div>
      </section>

    </div>
  );
}
  