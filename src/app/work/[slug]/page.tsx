import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TopBar } from "@/components/TopBar";
import { Contact } from "@/components/Contact";
import { projects, getProject } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return (
    <>
      <TopBar />
      <main id="main" className="wrap case">
        <Link className="back" href="/#projects">Back to all projects</Link>
        <h1>{project.title}</h1>
        <p className="lede">{project.summary}</p>
        <dl className="facts">
          <div><dt>Year</dt><dd>{project.year}</dd></div>
          <div><dt>Role</dt><dd>{project.myRole}</dd></div>
          <div><dt>Built with</dt><dd>{project.tags.join(", ")}</dd></div>
          {project.link && (
            <div><dt>Link</dt><dd><a href={project.link.href} target="_blank" rel="noreferrer">{project.link.label}</a></dd></div>
          )}
        </dl>

        {project.cover && (
          <div className="case-cover">
            <Image
              src={project.cover}
              alt={`${project.title} overview slide`}
              width={1600}
              height={900}
              sizes="(max-width: 1200px) 100vw, 1100px"
              priority
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        )}

        <div className="case-body">
          {project.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              {s.body && <p>{s.body}</p>}
              {s.list && <ul>{s.list.map((li) => <li key={li}>{li}</li>)}</ul>}
            </section>
          ))}
          {project.team && (
            <section>
              <h2>Team</h2>
              <ul className="team">
                {project.team.map((m) => (
                  <li key={m.name}>
                    {m.linkedIn ? <a href={m.linkedIn} target="_blank" rel="noreferrer">{m.name}</a> : m.name}
                    <span>{m.role}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {project.images && project.images.length > 0 && (
          <div className="gallery">
            {project.images.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={`${project.title} screen ${i + 1}`}
                width={1600}
                height={900}
                sizes="(max-width: 640px) 100vw, 560px"
                style={{ width: "100%", height: "auto" }}
              />
            ))}
          </div>
        )}
      </main>
      <Contact />
    </>
  );
}
