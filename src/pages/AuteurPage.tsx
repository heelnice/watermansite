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
          <p className="author-birth">Geboren 1992</p>
        </div>
      </div>

      <div className="author-content">
        <section className="author-bio">
          <p className="lead-text">
            Stan Plandsoen groeide op in een dorp waar verhalen sneller verspreiden dan de bus. 
            Hij geniet van het vertellen van korte anekdotes en lange verhalen – soms in de kroeg, 
            soms op papier.
          </p>

          <p>
            Normaal werkt Stan in de IT, maar momenteel woont hij een half jaar in een arme regio 
            in India, waar hij computerles geeft op een middelbare school. Schrijven doet hij al 
            langer. Vaak korte stukken en losse verhalen, maar tijdens de coronatijd kwam 
            <em> De Waterman</em> in zijn hoofd en begon hij eraan.
          </p>

          <p>
            Pas dit jaar, toen hij ineens meer tijd had, heeft hij het boek afgemaakt. 
            <em> De Waterman</em> is zijn debuutroman: een ode aan vriendschap, dorpsleven en 
            de schoonheid van het alledaagse.
          </p>

          <p className="author-quote">
            "Ik noem darts de mooiste TV-sport."
          </p>
        </section>

        <section className="book-origin">
          <h2>Over De Waterman</h2>
          <p>
            <em>De Waterman</em> is een verhaal over vriendschap, loyaliteit en de botsing tussen 
            een klein dorp en de rest van de wereld. Iets dat Stan zelf maar al te goed kent vanuit 
            zijn jeugd. Het boek vangt de warmte van avonden in de kroeg en de humor van vriendschap 
            die eindeloos lijkt, maar bouwt langzaam op naar een climax waarin het verhaal een wending 
            neemt.
          </p>

          <p>
            Wat begint als een herkenbare dorpsroman vol slices of life, eindigt als een aangrijpend 
            verhaal over verlies, acceptatie en volwassen worden. Schrijvers als Dimitri Verhulst, 
            Tommy Wieringa en Herman Brusselmans inspireren Stan. <em>De Waterman</em> is geen 
            standaard pageturner; het is een roman die de tijd neemt, vol humor en melancholie, 
            en die uitmondt in een onverwachte ontknoping.
          </p>

          <p>
            Zo'n twintig mensen hebben het boek inmiddels gelezen, en Stan merkt dat iedereen er 
            iets van zichzelf in herkent – vaak vanuit hun eigen dorp.
          </p>
        </section>
      </div>
    </div>
  );
}
  