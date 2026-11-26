import { person } from "@/data/profile";

export function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="wrap">
        <h2>Let&rsquo;s work on something together.</h2>
        <p>{person.availability} Email is the quickest way to reach me, or you can book a 30-minute call.</p>
        <div className="actions">
          <a className="btn primary" href={`mailto:${person.email}`}>Email me</a>
          <a className="btn ghost" href={person.calendar} target="_blank" rel="noreferrer">Book a call</a>
        </div>
        <div className="footer">
          <span>© {new Date().getFullYear()} {person.name}</span>
          <nav aria-label="Profiles">
            {person.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
