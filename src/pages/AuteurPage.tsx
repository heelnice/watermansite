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
          Ik groeide op in een dorp waar verhalen sneller rondgaan dan de bus. Ik vertel ze graag: korte anekdotes en lange verhalen, soms in de kroeg, soms op papier. Schrijven doe ik al langer. Meestal losse stukken, observaties en herinneringen, tot tijdens de coronatijd De Waterman in mijn hoofd ontstond en ik eraan begon.
          </p>
          <p>
          Pas dit jaar had ik de rust en tijd om het boek af te maken. De Waterman is mijn debuutroman: een verhaal over vriendschap, loyaliteit en de botsing tussen een klein dorp en de rest van de wereld. Een wereld die langzaam binnendringt, terwijl het leven in de kroeg, het darten en de onderlinge banden ogenschijnlijk hetzelfde blijven.
          </p>
          <p>
          Wat begint als een herkenbare dorpsroman vol slices of life, groeit uit tot een verhaal over verlies, acceptatie en volwassen worden. Het boek neemt de tijd, zit vol humor en melancholie, en bouwt langzaam op naar een wending waarin keuzes onvermijdelijk worden. Schrijvers als Dimitri Verhulst, Tommy Wieringa en Herman Brusselmans waren daarbij een inspiratie, al blijft De Waterman vooral mijn eigen verhaal.
          </p>
          <p>Inmiddels hebben zo’n twintig mensen het boek gelezen. Wat me het meest bijblijft, is dat bijna iedereen er iets van zichzelf in herkent — vaak vanuit hun eigen dorp.</p>
        </section>
      </div>
    </div>
  );
}
  