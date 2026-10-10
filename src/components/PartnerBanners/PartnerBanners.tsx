import { asset } from '../../utils';
import './PartnerBanners.scss';

export function PartnerBanners() {
  return (
    <section className="partners" aria-label="Parceiros">
      {[1, 2].map((n) => (
        <article key={n} className="partners__banner" style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.55), rgba(0,0,0,.1)), url(${asset('images/parceiros.jpg')})` }}>
          <h2>Parceiros</h2>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <a href="#">Confira</a>
        </article>
      ))}
    </section>
  );
}
