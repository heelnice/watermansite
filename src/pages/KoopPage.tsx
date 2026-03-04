import { useState, useRef, useEffect } from "react";
import "./KoopPage.css";
import ereaderImage from "../assets/ereaderimage.png";
import fysiekBoekImage from "../assets/alleen coverimage.jpg";
import { OfflineOrderModal } from "../components/OfflineOrderModal";

const BEER_PRICES: { year: number; price: number }[] = [
  { year: 2015, price: 4.50 },
  { year: 2016, price: 4.60 },
  { year: 2017, price: 4.75 },
  { year: 2018, price: 4.90 },
  { year: 2019, price: 5.10 },
  { year: 2020, price: 5.20 },
  { year: 2021, price: 5.35 },
  { year: 2022, price: 5.75 },  // inflatiesprong
  { year: 2023, price: 5.95 },
  { year: 2024, price: 6.00 },
  { year: 2025, price: 6.05 },
  { year: 2026, price: 6.15 }
];

const CHART_HEIGHT = 220;
const PAD = { top: 24, right: 24, bottom: 36, left: 48 };
const MIN_PRICE = 4.2;
const MAX_PRICE = 6.4;

function BeerChart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const updateWidth = () => setWidth(el.offsetWidth);
    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const innerW = width - PAD.left - PAD.right;
  const innerH = CHART_HEIGHT - PAD.top - PAD.bottom;

  const x = (year: number) =>
    PAD.left + (innerW * (year - 2015)) / (2026 - 2015);
  const y = (price: number) =>
    PAD.top + innerH - (innerH * (price - MIN_PRICE)) / (MAX_PRICE - MIN_PRICE);

  const pathD = BEER_PRICES.map((d, i) => `${i === 0 ? "M" : "L"} ${x(d.year)} ${y(d.price)}`).join(" ");

  const gridY = [4.5, 5, 5.5, 6, 6.2];
  const gridX = [2015, 2018, 2021, 2024, 2026];

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (width <= 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const xClient = e.clientX - rect.left;
    const frac = (xClient - PAD.left) / innerW;
    const index = Math.round(frac * (BEER_PRICES.length - 1));
    const clamped = Math.max(0, Math.min(BEER_PRICES.length - 1, index));
    setHoveredIndex(clamped);
    setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => setHoveredIndex(null);

  if (width <= 0) {
    return <div ref={containerRef} className="beer-chart-container" style={{ height: CHART_HEIGHT }} />;
  }

  return (
    <div ref={containerRef} className="beer-chart-container">
      <svg
        className="beer-chart-svg beer-chart-svg-interactive"
        width={width}
        height={CHART_HEIGHT}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {gridY.map((p) => (
          <line key={p} className="beer-chart-grid" x1={PAD.left} y1={y(p)} x2={width - PAD.right} y2={y(p)} />
        ))}
        {gridX.map((yr) => (
          <line key={yr} className="beer-chart-grid" x1={x(yr)} y1={PAD.top} x2={x(yr)} y2={CHART_HEIGHT - PAD.bottom} />
        ))}
        <path d={pathD} className="beer-chart-line" fill="none" />
        {BEER_PRICES.map((d, i) => (
          <circle
            key={d.year}
            className={`beer-chart-dot ${hoveredIndex === i ? "beer-chart-dot-hover" : ""}`}
            cx={x(d.year)}
            cy={y(d.price)}
            r={hoveredIndex === i ? 6 : 4}
          />
        ))}
        {gridY.map((p) => (
          <text key={p} className="beer-chart-axis" x={PAD.left - 8} y={y(p) + 4} textAnchor="end">
            €{p.toFixed(1).replace(".", ",")}
          </text>
        ))}
        {gridX.map((yr) => (
          <text key={yr} className="beer-chart-axis-x" x={x(yr)} y={CHART_HEIGHT - 8} textAnchor="middle">
            {yr}
          </text>
        ))}
      </svg>
      {hoveredIndex !== null && (
        <div
          className="beer-chart-tooltip"
          style={{
            left: Math.min(Math.max(tooltipPos.x, 60), width - 100),
            top: tooltipPos.y - 50,
          }}
        >
          <strong>{BEER_PRICES[hoveredIndex].year}</strong>
          <span> €{BEER_PRICES[hoveredIndex].price.toFixed(2).replace(".", ",")}</span>
        </div>
      )}
    </div>
  );
}

type Edition = "epub" | "fysiek";

const TOELICHTING_EPUB = (
  <>
    <p><b>Belangrijk!</b> Je downloadt het ePub-bestand, na aankoop, direct op je telefoon of computer. Deze moet je zelf nog op je e-reader installeren. Dat is simpel, maar ik help je graag. Scroll naar beneden voor de uitgebreide uitleg.</p>
  </>
);

const TOELICHTING_FYSIEK_VOORAF = (
  <p>Je kunt het boek ook zelf ophalen of door mij laten brengen. Via de knop &quot;Bestel zonder verzending&quot; stuur je mij een berichtje zonder vooraf te betalen.</p>
);
const TOELICHTING_FYSIEK_GESIGNEERD = (
  <p><b>En hij is gesigneerd!</b> Als je hem zelf ophaalt staat er zowaar mijn handtekening in. Meestal wordt zo'n boek pas geld waard wanneer de auteur de pijp uit is. Daar moet je dan nog even op wachten.</p>
);

export function KoopPage() {
  const [edition, setEdition] = useState<Edition>("fysiek");
  const [offlineOpen, setOfflineOpen] = useState(false);

  return (
    <div className="koop-page">
      <section className="koop-product">
        <div className="koop-product-grid">
          {/* Left: book image */}
          <div className="koop-product-image-col">
            <div className="koop-product-image-wrap">
              <img
                src={edition === "epub" ? ereaderImage : fysiekBoekImage}
                alt={edition === "epub" ? "De Waterman – ePub op e-reader" : "De Waterman – Fysiek boek"}
                className="koop-product-image"
              />
            </div>
          </div>

          {/* Right: edition choice + price + CTAs + toelichting */}
          <div className="koop-product-info-col">
            <h1 className="koop-product-title">De Waterman</h1>
            <p className="koop-product-author">Stan Plandsoen · Kroegroman</p>

            <div className="koop-uitvoering">
              <span className="koop-uitvoering-label">Kies je uitvoering</span>
              <div className="koop-uitvoering-buttons">
                <button
                  type="button"
                  className={`koop-uitvoering-btn ${edition === "fysiek" ? "active" : ""}`}
                  onClick={() => setEdition("fysiek")}
                >
                  Paperback
                </button>
                <button
                  type="button"
                  className={`koop-uitvoering-btn ${edition === "epub" ? "active" : ""}`}
                  onClick={() => setEdition("epub")}
                >
                  E-book (coming soon)
                </button>
              </div>
            </div>

            {edition === "epub" && (
              <>
                <div className="koop-price">€6,15</div>
                <p className="koop-availability">Altijd gelijk aan de gemiddelde prijs van een halve liter bier in Nederland.*</p>
                <a href="#" className="cta-button primary koop-cta-main">
                  Koop ePub (COMING SOON)
                </a>
              </>
            )}

            {edition === "fysiek" && (
              <>
                <div className="koop-price-range">
                  <span className="koop-price">€15,00</span>
                  <span className="koop-price-sep">of</span>
                  <span className="koop-price">€19,90</span>
                </div>
                <p className="koop-availability">Binnen vijf werkdagen bij jou op de deurmat via mijn uitgever Brave New Books.</p>
                <div className="koop-fysiek-ctas">
                  <a href="https://www.bravenewbooks.nl/books/22019182" target="_blank" rel="noopener noreferrer" className="cta-button primary koop-cta-main">
                    Bestel met verzending (€19,90)
                  </a>
                  <div className="koop-fysiek-divider" />
                  <div className="koop-toelichting koop-toelichting-inline">
                    {TOELICHTING_FYSIEK_VOORAF}
                  </div>
                  <button
                    type="button"
                    className="cta-button primary koop-cta-secondary"
                    onClick={() => setOfflineOpen(true)}
                  >
                    Bestel zonder verzending (€15)
                  </button>
                  <div className="koop-toelichting koop-toelichting-inline">
                    {TOELICHTING_FYSIEK_GESIGNEERD}
                  </div>
                </div>
              </>
            )}

            {edition === "epub" && (
              <div className="koop-toelichting">
                {TOELICHTING_EPUB}
              </div>
            )}
          </div>
        </div>

        {/* Below two columns: conditional content */}
        {edition === "epub" && (
          <div className="koop-below-columns">
            <h2 className="koop-below-heading">Hulp bij installeren van de ePub</h2>
            <div className="uitleg-content">
              <p>
                De ePub is een digitaal boekformaat dat op je e-reader, tablet of telefoon kan worden gelezen. Het
                is een standaardformaat dat op verschillende apparaten werkt.
              </p>
              <p>
              Wanneer je de ePub via deze pagina hebt gekocht, kun je deze direct van de webpagina downloaden. 
              In de map waar het bestand wordt opgeslagen zie je een wit icoontje met de naam <b>dewaterman.epub</b>. 
              Op mobiel is het makkelijkst om dit bestand naar jezelf te whatsappen of mailen en daarna op de computer op te slaan. Zit je al op de computer dan vind je het bestand waarschijnlijk onder 'Downloads'.
              </p>
              <p>
                De volgende stap is om het bestand op je e-reader te zetten vanuit je computer.
              </p>
              <p>
                <b>In deze video zie je precies hoe dat werkt:</b>{" "}
                <a
                  href="https://www.youtube.com/watch?v=LKpSphG215w"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.youtube.com/watch?v=LKpSphG215w
                </a>
              </p>
              <p>
                <b>Kort uitgelegd werkt het als volgt:</b>
              </p>
              <ol>
                <li>
                  Sluit je e-reader met het bijbehorende kabeltje aan op je computer.
                </li>
                <li>
                  Vaak verschijnt er automatisch een pop-up dat je computer de e-reader herkent en kun je de opslag
                  openen.
                </li>
                <li>
                  Verschijnt er geen pop-up? Open dan <b>Deze computer / Verkenner.</b> Daar zie je naast je gewone opslag
                  ook de opslag van je e-reader staan.
                </li>
                <li>
                  Open de map van je e-reader en <b>sleep of kopieer het bestand dewaterman.epub naar deze map.</b>
                </li>
                <li>
                  Verwijder daarna je e-reader veilig van de computer.
                </li>
              </ol>
              <p>De Waterman staat nu op je e-reader!</p>
            </div>
            <div className="koop-fysiek-divider koop-below-divider" />
            <div className="beer-tracker-standalone">
              <div className="beer-tracker-title">*Prijstracker 0,5L bier (NL gem.)</div>
              <div className="beer-chart-wrap">
                <BeerChart />
              </div>
              <div className="beer-tracker-footer"><i>Bron: CBS - Consumentenprijsindex 'Bier in cafés en restaurants' 2015–2026</i></div>
            </div>
          </div>
        )}

        {edition === "fysiek" && (
          <div className="koop-below-columns">
            <h2 className="koop-below-heading">Waarom deze prijzen?</h2>
            <div className="uitleg-content">
              <p>
              Een boek fysiek uitgeven is duur: papier, drukker, opslag, verzending… het tikt allemaal aan. Ik heb meerdere grote uitgevers benaderd, maar zij kozen er uiteindelijk voor om De Waterman niet uit te geven. Self-publishing is dan de enige manier om mijn verhaal de wereld in te krijgen. Dit betekent dat je alles zelf doet: design, opmaak, e-pub, promotie, etc. 
Maar ook dat je volledig afhankelijk bent van de prijzen van de self-publish uitgever. En die zijn voor kleine opgaven hoog. Van de €19,90 is slechts een paar euro voor de auteur. 
              </p>      
            </div>
          </div>
        )}
      </section>
      <OfflineOrderModal open={offlineOpen} onClose={() => setOfflineOpen(false)} />
    </div>
  );
}
