import { useState, type FormEvent } from "react";
import "./Newsletter.scss";

export function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setFeedback("Preencha seu nome e e-mail.");
      return;
    }
    if (!accepted) {
      setFeedback("É necessário aceitar os termos e condições.");
      return;
    }
    setFeedback("Inscrição realizada com sucesso!");
    setName("");
    setEmail("");
    setAccepted(false);
  };

  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter__inner">
        <header className="newsletter__text">
          <h2 id="newsletter-title" className="newsletter__title">
            Inscreva-se na nossa newsletter
          </h2>
          <p className="newsletter__subtitle">
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </header>

        <form className="newsletter__form" onSubmit={handleSubmit} noValidate>
          <div className="newsletter__fields">
            <input
              className="newsletter__input"
              type="text"
              name="name"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
            <input
              className="newsletter__input"
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
            <button className="newsletter__button" type="submit">
              Inscrever
            </button>
          </div>

          <label className="newsletter__check">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />
            <span>Aceito os termos e condições</span>
          </label>

          {feedback && (
            <p className="newsletter__feedback" role="status">
              {feedback}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
