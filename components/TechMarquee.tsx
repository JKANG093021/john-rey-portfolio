import Image from "next/image";

const technologies = [
  { name: "HTML5", logo: "/tech/html5.svg" },
  { name: "CSS3", logo: "/tech/css3.svg" },
  { name: "JavaScript", logo: "/tech/javascript.svg" },
  { name: "PHP", logo: "/tech/php.svg" },
  { name: "MySQL", logo: "/tech/mysql.svg" },
  { name: "PostgreSQL", logo: "/tech/postgresql.svg" },
  { name: "Next.js", logo: "/tech/nextjs.svg" },
  { name: "Git", logo: "/tech/git.svg" },
  { name: "REST APIs", logo: "/tech/api.svg" },
];

function TechSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="tech-marquee-set" aria-hidden={hidden || undefined}>
      {technologies.map((tech) => (
        <div className="tech-marquee-item" key={tech.name}>
          <span className="tech-logo-shell">
            <Image src={tech.logo} alt="" width={38} height={38} className="tech-logo-image" />
          </span>
          <span>{tech.name}</span>
        </div>
      ))}
    </div>
  );
}

export function TechMarquee() {
  return (
    <section className="tech-marquee-section section-grid-line" aria-label="Technologies and tools">
      <div className="container-shell tech-marquee-heading">
        <span className="tech-marquee-kicker">Technologies I work with</span>
        <span className="tech-marquee-note">Web, database and integration tools</span>
      </div>

      <div className="tech-marquee-window">
        <div className="tech-marquee-track">
          <TechSet />
          <TechSet hidden />
        </div>
      </div>
    </section>
  );
}
