import Link from "next/link";
import Image from "next/image";
import { TopBar } from "@/components/TopBar";
import { Contact } from "@/components/Contact";
import { Timeline } from "@/components/Timeline";
import { person, experience, leadership, education, honors, certifications, skills, site } from "@/data/profile";
import { projects } from "@/data/projects";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    alternateName: person.nickname,
    url: site.url,
    image: `${site.url}${person.avatar}`,
    jobTitle: "Computer Science and Design student",
    alumniOf: education.map((e) => e.school),
    sameAs: person.links.map((l) => l.href),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <TopBar />
      <main id="main">
        <section className="wrap hero">
          <h1>
            Mariano <span className="surname">Perdices</span>
          </h1>
          <div className="hero-meta">
            <p className="hero-intro">
              Hi, I&rsquo;m <strong>Yano</strong>. {person.intro}
            </p>
            <div className="hero-side">
              <Image className="avatar" src={person.avatar} alt="Portrait of Mariano Perdices" width={176} height={176} priority />
              <span className="status">Open to work in {person.location}</span>
            </div>
          </div>
          <div className="actions">
            <a className="btn primary" href={`mailto:${person.email}`}>Email me</a>
            <a className="btn ghost" href={person.calendar} target="_blank" rel="noreferrer">Book a call</a>
            {person.links.map((l) => (
              <a key={l.href} className="btn ghost" href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
            ))}
          </div>
          <Timeline />
        </section>

        <section className="wrap section" id="work" aria-labelledby="work-title">
          <div className="section-head">
            <h2 id="work-title">Work</h2>
            <p>Two internships so far: one turning documents into data, one turning manual processes into apps.</p>
          </div>
          <ul className="jobs">
            {experience.map((job) => (
              <li className="job" key={job.org}>
                <div className="job-when">
                  <b>{job.start} to {job.end}</b>
                  {job.kind}, {job.place}
                </div>
                <div>
                  <h3>{job.role}</h3>
                  <div className="org">{job.org}</div>
                  <ul>
                    {job.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                  <ul className="chips" aria-label="Skills used">
                    {job.skills.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="wrap section" id="projects" aria-labelledby="projects-title">
          <div className="section-head">
            <h2 id="projects-title">Projects</h2>
            <p>Hackathon builds, coursework, and things I made because I wanted them to exist.</p>
          </div>
          <div className="projects">
            {projects.map((p, i) => (
              <Link key={p.slug} href={`/work/${p.slug}`} className={`project${i < 2 ? " feature" : ""}`}>
                {p.cover && (
                  <div className="shot">
                    <Image src={p.cover} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 560px" />
                  </div>
                )}
                <div className="body">
                  <div className="top">
                    <span>{p.myRole}</span>
                    <span>{p.year}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <ul className="chips">
                    {p.tags.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="wrap section" id="about" aria-labelledby="about-title">
          <div className="section-head">
            <h2 id="about-title">About</h2>
            <p>
              I grew up in Cebu in the Philippines and came to Singapore as an ASEAN Scholar. Along the way I&rsquo;ve
              studied at UC Berkeley and IE University, competed in the CFA Research Challenge, and earned an AI product
              certificate from MIT.
            </p>
          </div>
          <div className="columns">
            <div>
              <h3>Education</h3>
              <ul className="list">
                {education.map((e) => (
                  <li key={e.school}>
                    <span className="t">{e.school}</span>
                    <span className="y">{e.when}</span>
                    <span className="s">{e.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Recognition</h3>
              <ul className="list">
                {honors.map((h) => (
                  <li key={h.title}>
                    <span className="t">{h.title}</span>
                    <span className="y">{h.year}</span>
                    <span className="s">{h.by}</span>
                  </li>
                ))}
              </ul>
              <h3 className="sub">Certifications</h3>
              <ul className="list">
                {certifications.map((c) => (
                  <li key={c.title}>
                    <span className="t">{c.title}</span>
                    <span className="y">{c.year}</span>
                    <span className="s">{c.by}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Skills</h3>
              <dl className="skills">
                {skills.map((s) => (
                  <div key={s.group}>
                    <dt>{s.group}</dt>
                    <dd>{s.items.join(", ")}</dd>
                  </div>
                ))}
              </dl>
              <h3 className="sub">Leadership</h3>
              <ul className="list">
                {leadership.map((l) => (
                  <li key={l.role}>
                    <span className="t">{l.role}</span>
                    <span className="y">{l.when}</span>
                    <span className="s">{l.org}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Contact />
    </>
  );
}
